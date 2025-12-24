import { useNavigate, Link } from "react-router-dom";
import { PLAYERS } from "../../lib/players";
import { go } from "../../lib/nav";

export default function OmaStart() {
  const theme = PLAYERS.oma;
  const nav = useNavigate();

  return (
    <div className="screen"  style={{
    "--bg-from": theme.from,
    "--bg-to": theme.to,
  } as React.CSSProperties}
>
      <h1>{theme.label}</h1>

      <div className="card">
        <p style={{ marginTop: 0 }}>
          <b>Das beschädigte Weihnachtsarchiv</b>
        </p>

        <p>
          Jedes Jahr sammelt das Archiv Hinweise, Zahlen und Zeichen – damit Dinge ihren Weg finden.
          Dieses Jahr ist es beschädigt. Fragmente sind verstreut.
        </p>

        <p>
          Du bekommst gleich deine eigenen Seiten. Manche Aufgaben löst ihr allein, viele nur zusammen.
          Am Ende öffnet ihr gemeinsam das Archiv – und holt die Gaben zurück.
        </p>

        <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.14)", margin: "14px 0" }} />

        <p><b>Regeln:</b></p>
        <ul style={{ margin: "8px 0 0 18px", color: "rgba(255,255,255,0.78)" }}>
          <li>Nach jeder Lösung kommst du in einen <b>Warteraum</b>.</li>
          <li>Erst weiter, wenn alle „bereit“ sagen (Stern antippen).</li>
          <li>Wenn du festhängst: <b>sag’s laut</b> – es ist ein Teamspiel.</li>
        </ul>

        <div className="btnRow" style={{ marginTop: 14 }}>
          <button className="primary" onClick={() => nav(go("oma", 1, "play"))}>
            ✶ Starten
          </button>
          <Link to="/"><button>Zur Startseite</button></Link>
        </div>

        <p className="small" style={{ marginTop: 12 }}>
          Tipp: Helligkeit hochdrehen – manche Hinweise sind subtil.
        </p>
      </div>
    </div>
  );
}
