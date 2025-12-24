import { useMemo, useState } from "react";
import type { PlayerId } from "../lib/players";
import { PLAYERS } from "../lib/players";
import { GAME2, type NumRule } from "../game/game2Config";

function parseNumber(input: string): number | null {
  const cleaned = input.trim().replace(",", ".");
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function matchesRule(n: number, rule: NumRule): boolean {
  if (rule.kind === "exact") return n === rule.value;
  if (rule.kind === "range") return n >= rule.min && n <= rule.max;
  return rule.values.includes(n);
}

export default function Game2QuizTokens({
  player,
  onSuccess,
  stepLabel = "Fragment 2",
}: {
  player: PlayerId;
  onSuccess: () => void;
  stepLabel?: string;
}) {
  const theme = PLAYERS[player];
  const cfg = GAME2[player];

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [solved, setSolved] = useState<Record<string, boolean>>({});
  const [msg, setMsg] = useState<string | null>(null);

  const tokens = useMemo(() => {
    return cfg.questions
      .filter((q) => solved[q.id])
      .map((q) => q.reward)
  }, [cfg.questions, solved]);

  const word = useMemo(() => tokens.map((t) => t.letter).join(""), [tokens]);

  function checkOne(qid: string) {
    const q = cfg.questions.find((x) => x.id === qid);
    if (!q) return;

    const n = parseNumber(answers[q.id] ?? "");
    if (n === null) {
      setMsg("Bitte eine Zahl eingeben.");
      return;
    }
    if (!matchesRule(n, q.rule)) {
      setMsg("Noch nicht richtig. Tipp: Hinweis lesen / nochmal rechnen.");
      return;
    }

    setSolved((prev) => ({ ...prev, [q.id]: true }));
    setMsg(null);
  }

  const allSolved = cfg.questions.length > 0 && cfg.questions.every((q) => solved[q.id]);

  return (
    <div className="screen" style={{"--bg-from": theme.from,"--bg-to": theme.to,} as React.CSSProperties}>
      <h1>{theme.label} • {stepLabel}</h1>
      <p>{cfg.intro}</p>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>{cfg.title}</h2>

        {cfg.questions.map((q, idx) => {
          const done = !!solved[q.id];
          return (
            <div key={q.id} style={{ marginTop: idx === 0 ? 10 : 14, opacity: done ? 0.85 : 1 }}>
              <p style={{ marginBottom: 6 }}>
                <b>{idx + 1}.</b> {q.prompt}
                {q.hint ? <span className="small"> — {q.hint}</span> : null}
              </p>

              <div className="btnRow" style={{ gap: 8 }}>
                <input
                  inputMode="numeric"
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Zahl…"
                  disabled={done}
                />
                <button className={done ? "" : "primary"} onClick={() => checkOne(q.id)} disabled={done}>
                  {done ? `Token: ${q.reward.letter}` : "Prüfen"}
                </button>
              </div>
            </div>
          );
        })}

        <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.14)", margin: "14px 0" }} />

        <p className="small">
          Gesammelter Buchstabe:{" "}
          <b>{tokens.length ? tokens.map((t) => `${t.letter}`).join("  ") : "—"}</b>
        </p>
        <p className="small">
           Bitte merke dir den Buchstaben: <b>{word || "—"}</b>
        </p>

        {msg && <p style={{ marginTop: 10 }}>{msg}</p>}

        <div className="btnRow" style={{ marginTop: 12 }}>
          <button className="primary" disabled={!allSolved} onClick={onSuccess}>
            Weiter in den Warteraum
          </button>
        </div>
      </div>
    </div>
  );
}
