import type { PlayerId } from "../lib/players";
import { PLAYERS } from "../lib/players";

type Props = {
  player: PlayerId;
  title: string;
  instructions?: string;
  stepLabel: string; // z.B. "Dein Schritt"
  stepText: string; // z.B. "Lege das Geschenk mittig aufs Papier."
  digitLabel?: string; // z.B. "Deine Ziffer"
  digit: string; // z.B. "4"
  onContinue: () => void; // nav(go(player, 6, "wait"))
};

export default function GiftWrapStep({
  player,
  title,
  instructions = "Lies deinen Schritt laut vor. Bringt gemeinsam alle 6 Schritte in die richtige Reihenfolge. Merkt euch den die Buchstaben die ihr für den Warteraum.",
  stepLabel,
  stepText,
  digitLabel = "Dein Buchstabe",
  digit,
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
          <div
            style={{
              fontSize: 44,
              lineHeight: 1,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            ✶
          </div>

          <p className="small" style={{ margin: 0, opacity: 0.85 }}>
            {stepLabel}
          </p>
          <div style={{ fontSize: 18, fontWeight: 700, margin: "6px 0 14px" }}>
            {stepText}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "10px 12px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.16)",
            }}
          >
            <span className="small" style={{ opacity: 0.9 }}>
              {digitLabel}
            </span>
            <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: 1 }}>
              {digit}
            </span>
          </div>
        </div>

        <button
          className="primary"
          onClick={onContinue}
          style={{ width: "100%", marginTop: 14, padding: "14px 16px" }}
        >
          ✶ Weiter
        </button>

        <p
          className="small"
          style={{ marginTop: 10, opacity: 0.85, textAlign: "center" }}
        >
          Lösungswort = Buchstaben in richtiger Reihenfolge der Schritte.
        </p>
      </div>
    </div>
  );
}
