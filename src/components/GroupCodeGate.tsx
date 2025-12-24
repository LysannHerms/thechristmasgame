import { useMemo, useState } from "react";

export default function GroupCodeGate({
  expectedSymbol,
  expectedDigits,
  onOkChange,
}: {
  expectedSymbol: string;
  expectedDigits: string[]; // length 6
  onOkChange: (ok: boolean) => void;
}) {
  const [sym, setSym] = useState("");
  const [digits, setDigits] = useState(Array(6).fill(""));

  const ok = useMemo(() => {
    const s = sym.trim();
    if (s !== expectedSymbol) return false;
    for (let i = 0; i < 6; i++) {
      if ((digits[i] ?? "").trim() !== expectedDigits[i]) return false;
    }
    return true;
  }, [sym, digits, expectedSymbol, expectedDigits]);

  // inform parent whenever ok changes
  useMemo(() => {
    onOkChange(ok);
  }, [ok, onOkChange]);

  return (
    <div>
      <p className="small" style={{ marginBottom: 8 }}>
        Tragt zuerst <b>das Symbol</b> ein, dann die <b>6 Zahlen</b> (Position 1–6).
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
        <input
          value={sym}
          onChange={(e) => setSym(e.target.value.slice(0, 1))}
          placeholder="Symbol (1 Zeichen)"
          autoCapitalize="none"
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
          {digits.map((v, i) => (
            <input
              key={i}
              value={v}
              onChange={(e) => {
                const d = e.target.value.replace(/\D/g, "").slice(0, 1);
                setDigits((prev) => {
                  const next = [...prev];
                  next[i] = d;
                  return next;
                });
              }}
              inputMode="numeric"
              placeholder={`${i + 1}`}
              style={{ textAlign: "center" }}
            />
          ))}
        </div>

        <p className="small" style={{ marginTop: 2 }}>
          Status: {ok ? <b>richtig ✅</b> : "noch nicht richtig"}
        </p>
      </div>
    </div>
  );
}
