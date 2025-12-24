import { useState } from "react";
import type { PlayerId } from "../lib/players";
import { PLAYERS } from "../lib/players";

type Props = {
  player: PlayerId;
  title: string;
  instructions?: string;
  word: string;
  onContinue: () => void; // z.B. nav(go(player, 4, "wait"))
};

export default function RevealWordStep({
  player,
  title,
  instructions = "Erkläre das Wort den anderen, ohne es zu sagen. Keine Pantomime – nur erklären.",
  word,
  onContinue,
}: Props) {
  const theme = PLAYERS[player];
  const [revealed, setRevealed] = useState(false);
  const [showWord, setShowWord] = useState(false);

  return (
     <div className="screen"  style={{
    "--bg-from": theme.from,
    "--bg-to": theme.to,
  } as React.CSSProperties}
>
      <h1 style={{ marginBottom: 6 }}>{title}</h1>
      <p style={{ marginTop: 0, opacity: 0.92 }}>{instructions}</p>

      <div className="card" style={{ textAlign: "center" }}>
        {/* Wort-Box */}
        <div
          style={{
            borderRadius: 16,
            padding: 16,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(0,0,0,0.18)",
          }}
        >
          {!showWord ? (
            <>
              <div style={{ fontSize: 44, lineHeight: 1, marginBottom: 8 }}>✶</div>
              <p className="small" style={{ marginTop: 0, opacity: 0.9 }}>
                Tippe, um dein Wort zu sehen.
              </p>

              <button
                className="primary"
                onClick={() => {
                  setShowWord(true);
                  setRevealed(true); // <<< wichtig: freischalten
                }}
                style={{ width: "100%" }}
              >
                Wort aufdecken
              </button>
            </>
          ) : (
            <>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  letterSpacing: 1,
                  padding: "10px 0",
                }}
              >
                {word}
              </div>

              <button
                className="secondary"
                onClick={() => setShowWord(false)}
                style={{ width: "100%" }}
              >
                Wort wieder verdecken
              </button>

              <p className="small" style={{ marginBottom: 0, opacity: 0.85 }}>
                Jetzt erklären – die anderen raten laut.
              </p>
            </>
          )}
        </div>

        {/* Weiter / Stern */}
        <button
          className="primary"
          disabled={!revealed}
          onClick={onContinue}
          style={{
            width: "100%",
            marginTop: 14,
            padding: "14px 16px",
            opacity: revealed ? 1 : 0.55,
          }}
        >
          ✶ Weiter
        </button>

        {!revealed && (
          <p className="small" style={{ marginTop: 10, opacity: 0.85 }}>
            (Erst Wort aufdecken, dann weiter.)
          </p>
        )}
      </div>
    </div>
  );
}
