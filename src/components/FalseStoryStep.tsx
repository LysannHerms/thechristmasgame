import type { PlayerId } from "../lib/players";
import { PLAYERS } from "../lib/players";

type Props = {
  player: PlayerId;
  title: string;
  instructions?: string;
  story: string;
  onContinue: () => void; // z.B. nav(go(player, 5, "wait"))
};

export default function FalseStoryStep({
  player,
  title,
  instructions = "In dieser Geschichte sind einige Dinge falsch. Findet sie gemeinsam.",
  story,
  onContinue,
}: Props) {
  const theme = PLAYERS[player];

  return (
    <div
      className="screen"
      style={
        {
          "--bg-from": theme.from,
          "--bg-to": theme.to,
        } as React.CSSProperties
      }
    >
      <h1 style={{ marginBottom: 6 }}>{title}</h1>
      <p style={{ marginTop: 0, opacity: 0.92 }}>{instructions}</p>

      <div className="card">
        <div
          style={{
            borderRadius: 16,
            padding: 16,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(0,0,0,0.18)",
          }}
        >
         

          <p
            style={{
              margin: 0,
              whiteSpace: "pre-line",
              lineHeight: 1.45,
              opacity: 0.95,
            }}
          >
            {story}
          </p>
        </div>

        <button
          className="primary"
          onClick={onContinue}
          style={{ width: "100%", marginTop: 14, padding: "14px 16px" }}
        >
          ✶ Weiter
        </button>

        <p className="small" style={{ marginTop: 10, opacity: 0.85, textAlign: "center" }}>
          Sprecht kurz miteinander – die Eingabe kommt im Warteraum.
        </p>
      </div>
    </div>
  );
}
