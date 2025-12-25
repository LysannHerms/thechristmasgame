import { useMemo } from "react";

type Props = {
  starSrc: string;
  count?: number;
};

type Star = {
  id: number;
  leftPct: number;
  sizePx: number;
  duration: number;
  delay: number;
  driftPx: number;
  opacity: number;
};

export default function StarConfetti({ starSrc, count = 60 }: Props) {
  const stars = useMemo<Star[]>(() => {
    const arr: Star[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        leftPct: Math.random() * 100,
        sizePx: 10 + Math.random() * 16, // 10–26px
        duration: 6 + Math.random() * 6, // 6–12s
        delay: Math.random() * 4, // 0–4s
        driftPx: 20 + Math.random() * 80, // 20–100px
        opacity: 0.35 + Math.random() * 0.45, // 0.35–0.8
      });
    }
    return arr;
  }, [count]);

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {/* Keyframes einmalig inline */}
      <style>{`
        @keyframes fall {
          0%   { transform: translate3d(var(--drift), -12vh, 0) rotate(0deg); }
          100% { transform: translate3d(calc(var(--drift) * -1), 112vh, 0) rotate(360deg); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 0px rgba(255, 235, 120, 0.0)); opacity: var(--op); }
          50%      { filter: drop-shadow(0 0 10px rgba(255, 235, 120, 0.65)); opacity: calc(var(--op) + 0.15); }
        }
      `}</style>

      {stars.map((s) => (
        <img
          key={s.id}
          src={starSrc}
          alt=""
          style={{
            position: "absolute",
            left: `${s.leftPct}%`,
            top: 0,
            width: s.sizePx,
            height: s.sizePx,
            opacity: s.opacity,
            transform: "translate3d(0,-12vh,0)",
            animation: `fall ${s.duration}s linear ${s.delay}s infinite, glow 2.2s ease-in-out ${s.delay}s infinite`,
            // CSS-Variablen für Drift/Opacity
            ["--drift" as any]: `${s.driftPx}px`,
            ["--op" as any]: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
