import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PLAYERS } from "../lib/players";
import type { PlayerId } from "../lib/players";
import { isDone, lockStep, markDone, resetAll, resetPlayer, unlockUpTo, type Step } from "../lib/progress";

const PLAYER_LIST: { id: PlayerId; label: string }[] = [
  { id: "oma", label: "Oma" },
  { id: "mama", label: "Mama" },
  { id: "papa", label: "Papa" },
  { id: "soeren", label: "Sören" },
  { id: "norman", label: "Norman" },
  { id: "sina", label: "Sina" },
  { id: "zsaklin", label: "Zsaklin" },
];

const STEPS: Step[] = [1,2,3,4,5,6,7,8,9];

export default function Admin() {
  const [selected, setSelected] = useState<PlayerId>("oma");
  const theme = PLAYERS[selected as keyof typeof PLAYERS];

  // Re-render Trigger (simpler als state für jedes Feld)
  const [tick, setTick] = useState(0);

  const status = useMemo(() => {
    // Nur damit useMemo tickt
    void tick;
    const s: Record<number, boolean> = {};
    for (const step of STEPS) s[step] = isDone(selected, step);
    return s;
  }, [selected, tick]);

  return (
    <div className="screen" style={
    {
      "--bg-from": theme.from,
      "--bg-to": theme.to,
    } as React.CSSProperties
  }
>
      <h1>Admin</h1>
      <p>Hier kannst du einzelne Steps freischalten (ohne alles zu resetten).</p>

      <div className="card">
        <h2>Person wählen</h2>
        <div className="btnRow">
          {PLAYER_LIST.map((p) => (
            <button
              key={p.id}
              className={p.id === selected ? "primary" : ""}
              onClick={() => setSelected(p.id)}
              title={p.label}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <h2>{PLAYER_LIST.find(p => p.id === selected)?.label} – Steps</h2>
        <p className="small">
          Grün/aktiv heißt: Step gilt als erledigt → Guards lassen weiter.
        </p>

        <div className="btnRow">
          {STEPS.map((step) => {
            const done = status[step];
            return (
              <button
                key={step}
                className={done ? "primary" : ""}
                onClick={() => {
                  // Toggle: done <-> not done
                  if (done) lockStep(selected, step);
                  else markDone(selected, step);
                  setTick((t) => t + 1);
                }}
                title={done ? "Klicken = wieder sperren" : "Klicken = freischalten"}
              >
                Step {step} {done ? "✓" : ""}
              </button>
            );
          })}
        </div>

        <div className="btnRow" style={{ marginTop: 10 }}>
          <button
            onClick={() => {
              unlockUpTo(selected, 3);
              setTick((t) => t + 1);
            }}
          >
            Unlock bis 3
          </button>
          <button
            onClick={() => {
              unlockUpTo(selected, 6);
              setTick((t) => t + 1);
            }}
          >
            Unlock bis 6
          </button>
          <button
            onClick={() => {
              unlockUpTo(selected, 9);
              setTick((t) => t + 1);
            }}
          >
            Unlock bis 9
          </button>
        </div>

        <div className="btnRow" style={{ marginTop: 10 }}>
          <button
            onClick={() => {
              resetPlayer(selected);
              setTick((t) => t + 1);
            }}
          >
            Reset nur diese Person
          </button>

          <button
            onClick={() => {
              // Notbremse – nicht prominent, aber da.
              const ok = confirm("Wirklich ALLES resetten?");
              if (ok) {
                resetAll();
                setTick((t) => t + 1);
              }
            }}
          >
            Reset ALLES
          </button>

          <Link to="/"><button>Zurück zur Startseite</button></Link>
        </div>

        <p className="small">
          Hinweis: Das wirkt nur auf <b>diesem Gerät</b>. Wenn jemand auf seinem Handy hängt,
          musst du das auf <b>seinem</b> Gerät öffnen (oder du spielst auf einem gemeinsamen Handy).
        </p>
      </div>
    </div>
  );
}
