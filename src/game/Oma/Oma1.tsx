import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PLAYERS } from "../../lib/players";
import { markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Oma1() {
  const theme = PLAYERS.oma;
  const nav = useNavigate();

  // Stell das hier auf false, wenn du GAR KEINEN Text anzeigen willst
  const SHOW_INFO = true;

  const [infoOpen, setInfoOpen] = useState(SHOW_INFO);

  // TODO: Pfad zu deinem Bildfragment
  const imgSrc = useMemo(() => "src/assets/oma/fragment-1.png", []);

  return (
        <div className="screen"  style={{
    "--bg-from": theme.from,
    "--bg-to": theme.to,
  } as React.CSSProperties}
>
      {/* Fullscreen Bildfläche */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100svh", // besser als 100vh auf Mobile (Safari/Chrome Adressleiste)
        }}
      >
        <img
          src={imgSrc}
          alt="Oma Fragment 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // KEIN Cropping, KEINE Verzerrung
            display: "block",
          }}
        />

        {/* Optionales Info-Overlay (wegklickbar) */}
        {SHOW_INFO && infoOpen && (
          <div
            style={{
              position: "absolute",
              left: 12,
              right: 12,
              bottom: 12,
              borderRadius: 16,
              padding: 12,
              background: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(6px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div style={{ lineHeight: 1.3 }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>
                  {theme.label} • Fragment 1
                </div>
                <div style={{ fontSize: 14 }}>
                  Legt eure Handys nebeneinander und erkennt das Gesamtbild.
                </div>
              </div>

              <button
                onClick={() => setInfoOpen(false)}
                aria-label="Info schließen"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  borderRadius: 12,
                  padding: "8px 10px",
                  cursor: "pointer",
                  height: "fit-content",
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Floating "Weiter" Button */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            display: "flex",
            gap: 10,
            color: "red",
          }}
        >
          {SHOW_INFO && (
            <button
              onClick={() => setInfoOpen((v) => !v)}
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(0,0,0,0.35)",
                color: "white",
                borderRadius: 999,
                padding: "10px 12px",
                cursor: "pointer",
              }}
              aria-label="Info ein-/ausblenden"
            >
              i
            </button>
          )}

          <button
            className="primary"
            onClick={() => {
              markDone("oma", 1);
              nav(go("oma", 1, "wait"));
            }}
           style={{
    background: "#ffffff",          // NICHT transparent
    color: "#000000",
    border: "none",
    borderRadius: 999,
    padding: "14px 18px",
    fontSize: 16,
    fontWeight: 600,
    minHeight: 48,                  // mobile tap size
    zIndex: 10,                     // WICHTIG
    boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
    cursor: "pointer",
  }}
          >
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}
