import { useState } from "react";
import WaitRoom from "../../components/WaitRoom";
import { SOLUTIONS } from "../../lib/solutions";
import bgStars from "../../assets/Sternenbild.png";
import starImg from "../../assets/Stern3.png";

export default function Soeren6Wait() {
  const solution = SOLUTIONS.soeren[6]; // <- 7-stelliger Code
  const [answer, setAnswer] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function check() {
    const cleaned = answer.trim().toUpperCase();
    if (!cleaned) {
      setError("Bitte den Code eingeben.");
      setOk(false);
      return;
    }
    if (cleaned === solution) {
      setOk(true);
      setError(null);
      return;
    }
    setError("Noch nicht richtig.");
    setOk(false);
  }

  return (
    <WaitRoom
      player="soeren"
      step={6}
      title="Fragment 6 gesichert"
      subtitle="Gebt den 7-stelligen Code ein (Ziffern in richtiger Schritt-Reihenfolge). Dann wartet kurz und tippt auf den Stern."
      bgImgSrc={bgStars}
      starImgSrc={starImg}
      extra={
        <div
          style={{
            width: "100%",
            padding: "14px 14px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(0,0,0,0.18)",
            color: "white",
            outline: "none",
            fontSize: 16,
          }}
        >
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="7-stelliger Code…"
            inputMode="numeric"
            style={{ width: "100%" }}
          />
          <div className="btnRow" style={{ marginTop: 10 }}>
            <button className="primary" onClick={check} style={{ width: "100%" }}>
              Prüfen
            </button>
          </div>

          {error && (
            <p className="small" style={{ marginTop: 10, color: "rgba(255,80,80,0.95)" }}>
              {error}
            </p>
          )}

          {ok && (
            <p className="small" style={{ marginTop: 10, color: "rgba(174, 235, 155, 0.95)" }}>
              Richtig ✅
            </p>
          )}
        </div>
      }
      disableStar={!ok}
    />
  );
}
