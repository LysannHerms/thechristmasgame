// src/components/ScratchCard.tsx
import { useEffect, useRef, useState } from "react";

type Props = {
  hiddenImgSrc: string;   // Bild, das darunter sichtbar wird
  coverImgSrc: string;    // Bild, das weggerubbelt wird (z.B. Sternenbild)
  brushSize?: number;     // Rubbel-Radius
  storageKey?: string;    // z.B. "scratch:oma:3" (damit Reload nicht resetet)
  onProgress?: (p: number) => void; // 0..1
};

export default function ScratchCard({
  hiddenImgSrc,
  coverImgSrc,
  brushSize = 28,
  storageKey,
  onProgress,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Canvas auf aktuelle Displaygröße setzen (wichtig für Touch-Genauigkeit)
  function syncCanvasSize() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));

    // nur neu setzen wenn nötig (sonst verlierst du aktuellen Canvas-Inhalt)
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      return true;
    }
    return false;
  }

  function computeProgress() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = img.data;

    // Sampling für Performance
    const step = 16;
    let transparent = 0;
    for (let i = 3; i < data.length; i += 4 * step) {
      if (data[i] === 0) transparent++;
    }
    const total = Math.floor(data.length / (4 * step));
    const p = total ? transparent / total : 0;

    setProgress(p);
    onProgress?.(p);
  }

  function saveCanvas() {
    const canvas = canvasRef.current;
    if (!canvas || !storageKey) return;
    try {
      localStorage.setItem(storageKey, canvas.toDataURL("image/png"));
    } catch {
      // ignore quota errors
    }
  }

  // Initial draw: Cover-Bild auf Canvas, dann ggf. Restore aus storageKey
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // beim ersten Render muss das Canvas eine Größe haben
    syncCanvasSize();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;

    const drawCoverThenRestore = async () => {
      // 1) Cover zeichnen
      await new Promise<void>((resolve) => {
        const cover = new Image();
        cover.onload = () => {
          if (cancelled) return;
          ctx.globalCompositeOperation = "source-over";
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(cover, 0, 0, canvas.width, canvas.height);
          resolve();
        };
        cover.src = coverImgSrc;
      });

      if (cancelled) return;

      // 2) Restore (falls vorhanden)
      if (storageKey) {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          await new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
              if (cancelled) return;
              ctx.globalCompositeOperation = "source-over";
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              resolve();
            };
            img.src = saved;
          });
        }
      }

      if (cancelled) return;
      computeProgress();
    };

    drawCoverThenRestore();

    // Resize handling (wenn Handy dreht / Safari UI sich ändert)
    const onResize = () => {
      const changed = syncCanvasSize();
      if (!changed) return;

      // Wenn Größe sich ändert, müssen wir Cover+Restore neu zeichnen,
      // sonst ist der Canvas leer/skalierungsfalsch.
      drawCoverThenRestore();
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverImgSrc, storageKey]);

  // Pointer mapping
  function getPoint(e: any) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = ((clientX - rect.left) / rect.width) * canvas.width;
    const y = ((clientY - rect.top) / rect.height) * canvas.height;
    return { x, y };
  }

  function scratchAt(x: number, y: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();

    computeProgress();
  }

  const scratching = useRef(false);

  function onDown(e: any) {
    e.preventDefault();
    scratching.current = true;
    const { x, y } = getPoint(e);
    scratchAt(x, y);
  }

  function onMove(e: any) {
    if (!scratching.current) return;
    e.preventDefault();
    const { x, y } = getPoint(e);
    scratchAt(x, y);
  }

  function onUp() {
    scratching.current = false;
    saveCanvas();
  }

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        touchAction: "none",
      }}
    >
      {/* Hidden image underneath */}
      <img
        src={hiddenImgSrc}
        alt=""
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          userSelect: "none",
          WebkitUserSelect: "none",
          pointerEvents: "none",
        }}
      />

      {/* Canvas overlay (cover + scratches) */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          touchAction: "none",
        }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      />

      {/* optional mini progress */}
      <div
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          padding: "6px 10px",
          borderRadius: 12,
          background: "rgba(0,0,0,0.35)",
          color: "rgba(255,255,255,0.9)",
          fontSize: 12,
          pointerEvents: "none",
        }}
      >
        {Math.round(progress * 100)}%
      </div>
    </div>
  );
}
