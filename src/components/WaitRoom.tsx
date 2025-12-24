import { useNavigate } from "react-router-dom";
import type { PlayerId } from "../lib/players";
import { go } from "../lib/nav";
import { PLAYERS } from "../lib/players";
import { isDone } from "../lib/progress";
import type { ReactNode } from "react";


type Props = {
  player: PlayerId;
  step: 1|2|3|4|5|6|7|8|9;
  title?: string;
  subtitle?: string;
  starImgSrc?: string;
  bgImgSrc?: string;
  

  extra?: ReactNode;
  disableStar?: boolean;
};

export default function WaitRoom({
  player, step,
  title = "Warteraum",
  subtitle = "Warte kurz auf die anderen. Wenn ihr bereit seid: Stern antippen.",
  starImgSrc, bgImgSrc,
  extra,
  disableStar = false,
}: Props) {
  const theme = PLAYERS[player as keyof typeof PLAYERS];
  const nav = useNavigate();

  if (!isDone(player, step)) {
    nav(go(player, step, "play"));
    return null;
  }

 return (
  <div
    className="screen"
    style={{
      background: bgImgSrc ? `url(${bgImgSrc}) center/cover no-repeat` : `linear-gradient(to bottom, var(--bg-from), var(--bg-to))`,
      position: "relative",
      padding: 16,
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      gap: 14,
    }}
  >
    {/* Keyframes lokal (blink/pulse) */}
    <style>{`
      @keyframes starBlink {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(255,255,255,0)); opacity: 1; }
        50% { transform: scale(1.06); filter: drop-shadow(0 0 18px rgba(255,255,255,0.9)); opacity: 0.92; }
      }
    `}</style>

    {/* TOP: Text + Eingabe in Container */}
    <div
      style={{
        background: "rgba(19, 66, 24, 0.45)",
        border: "1px solid rgba(38, 153, 47, 0.18)",
        borderRadius: 18,
        padding: 14,
        fontSize: 16,
        backdropFilter: "blur(6px)",
        color: "rgba(255,255,255,0.95)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 28, lineHeight: 1.1 }}>
        {theme.label} • {title}
      </h1>
      <p style={{ marginTop: 10, marginBottom: 0, lineHeight: 1.35 }}>{subtitle}</p>

      {/* extra kommt hier rein (Input + Prüfen + Feedback) */}
      {extra && <div style={{ marginTop: 12 }}>{extra}</div>}
    </div>

    {/* MIDDLE: Stern frei auf dem Hintergrund */}
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button
        className="primary"
        disabled={disableStar}
        onClick={() => nav(go(player, (Math.min(step + 1, 9) as any), "play"))}
        aria-label="Weiter"
        style={{
          // frei schwebend: kein Container, kein Halbtransparent
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: disableStar ? "default" : "pointer",
          opacity: disableStar ? 0.35 : 1,
          pointerEvents: disableStar ? "none" : "auto",
        }}
      >
        {starImgSrc ? (
          <img
            src={starImgSrc}
            alt="Stern"
            style={{
              width: 200,
              maxWidth: "70vw",
              height: "auto",
              // Blink nur wenn aktiv
              animation: disableStar ? "none" : "starBlink 1.1s ease-in-out infinite",
            }}
          />
        ) : (
          <span
            style={{
              fontSize: 64,
              animation: disableStar ? "none" : "starBlink 1.1s ease-in-out infinite",
            }}
          >
            ✶
          </span>
        )}
      </button>
    </div>

    {/* BOTTOM: Tipp in Container */}
    <div
      style={{
        background: "rgba(27, 87, 26, 0.45)",
        border: "1px solid rgba(14, 64, 23, 0.18)",
        borderRadius: 18,
        padding: 12,
        backdropFilter: "blur(6px)",
        color: "rgba(255,255,255,0.88)",
      }}
    >
      <p className="small" style={{ margin: 0 }}>
        Tipp: Erst klicken, wenn alle “bereit” sagen.
      </p>
    </div>
  </div>
);
}
