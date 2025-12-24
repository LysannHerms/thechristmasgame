import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  hiddenImgSrc: string;   // Bild darunter
  coverImgSrc: string;    // Bild oben (wird weggerubbelt) -> dein Sternenbild
  brushSize?: number;
  storageKey?: string;
  onProgress?: (p: number) => void;
};

export default function RotatedScratchFull({
  hiddenImgSrc,
  coverImgSrc,
  brushSize = 28,
  storageKey,
  onProgress,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Portrait-Viewport
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Content wird um 90° gedreht -> "Bühne" ist (vh x vw)
  const stage = useMemo(() => ({ w: vh, h: vw }), [vw, vh]);

  function save() {
    const canvas = canvasRef.current;
    if (!canvas || !storageKey) return;
    try {
      localStorage.setItem(storageKey, canvas.toDataURL("image/png"));
    } catch {
      // ignore
    }
  }

  function computeProgress() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = img.data;

    let transparent = 0;
    const step = 16;
    for (let i = 3; i < data.length; i += 4 * step) {
      if (data[i] === 0) transparent++;
    }
    const total = Math.floor(data.length / (4 * step));
    const p = total ? transparent / total : 0;

    setProgress(p);
    onProgress?.(p);
  }

  // Cover zeichnen + Restore (falls gespeichert)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = stage.w;
    canvas.height = stage.h;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;

    const drawCoverThenRestore = async () => {
      // 1) Cover-Bild
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

      // 2) Restore saved scratches
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

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage.w, stage.h, coverImgSrc, storageKey]);

  function scratchAt(cx: number, cy: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, brushSize, 0, Math.PI * 2);
    ctx.fill();

    computeProgress();
  }

  // Pointer -> Canvas Koordinaten (weil Content gedreht wird)
  function pointerToCanvas(e: any) {
    const wrapper = e.currentTarget as HTMLDivElement;
    const rect = wrapper.getBoundingClientRect();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) / rect.width;  // 0..1
    const y = (clientY - rect.top) / rect.height;  // 0..1

    const xStage = x * stage.h; // stage.h = vw
    const yStage = y * stage.w; // stage.w = vh

    // inverse Rotation 90° clockwise
    const cx = yStage;
    const cy = stage.h - xStage;

    return { cx, cy };
  }

  const down = useRef(false);

  function onDown(e: any) {
    e.preventDefault();
    down.current = true;
    const { cx, cy } = pointerToCanvas(e);
    scratchAt(cx, cy);
  }

  function onMove(e: any) {
    if (!down.current) return;
    e.preventDefault();
    const { cx, cy } = pointerToCanvas(e);
    scratchAt(cx, cy);
  }

  function onUp() {
    down.current = false;
    save();
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        overflow: "hidden",
        touchAction: "none",
      }}
    >
      {/* Minimaler Text */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 12,
          right: 12,
          zIndex: 10,
          color: "white",
          fontSize: 14,
          opacity: 0.9,
          textShadow: "0 1px 2px rgba(0,0,0,0.6)",
        }}
      >
        Bitte freirubbeln und einen Buchstaben oder ein Symbol suchen.
      </div>

      {/* Wrapper (Portrait). Innen wird gedreht. */}
      <div
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
        style={{ position: "absolute", inset: 0 }}
      >
        <div
          style={{
            position: "absolute",
            width: stage.w,  // vh
            height: stage.h, // vw
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(90deg)",
            transformOrigin: "center",
          }}
        >
          <img
  src={hiddenImgSrc}
  alt=""
  draggable={false}
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    background: "darkgreen",
    userSelect: "none",
    WebkitUserSelect: "none",
    pointerEvents: "none",
  }}
/>

          <canvas
  ref={canvasRef}
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  }}
/>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 12,
          zIndex: 10,
          color: "rgba(255,255,255,0.85)",
          fontSize: 12,
        }}
      >
        {Math.round(progress * 100)}%
      </div>
    </div>
  );
}
