import { useState } from "react";
import WaitRoom from "../../components/WaitRoom";
import { SOLUTIONS } from "../../lib/solutions";
import bgStars from "../../assets/Sternenbild.png";
import starImg from "../../assets/Stern3.png";

export default function Sina3Wait() {
  const solution = SOLUTIONS.sina[3]; // LAMETTA
  const [answer, setAnswer] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function check() {
    const cleaned = answer.trim().toUpperCase();
    if (!cleaned) {
      setError("Setzt die gefundenen Zahlen und Symbole in der richtigen Reihenfolge zusammen.");
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
      player="sina"
      step={3}
      subtitle="Sammelt eure Buchstaben und sortiert sie, um ein Lösungswort zu erhalten. Wenn es stimmt, wartet kurz auf die anderen und tippt dann den Stern an."
      bgImgSrc={bgStars}
      starImgSrc={starImg}
      extra={
        <div
          style={{
            width: "100%",
            padding: "14px 14px",
            borderRadius: 14,
            border: "1px solid rgba(101, 138, 77, 0.22)",
            background: "rgba(7, 95, 13, 0.25)",
            color: "white",
            outline: "none",
            fontSize: 16,
          }}
        >
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Lösung"
            autoCapitalize="characters"
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
