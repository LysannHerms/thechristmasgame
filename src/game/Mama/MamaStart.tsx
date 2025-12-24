import { useNavigate, Link } from "react-router-dom";
import { PLAYERS } from "../../lib/players";
import { go } from "../../lib/nav";

export default function MamaStart() {
  const theme = PLAYERS.mama;
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
          <b>-Das beschädigte Weihnachtsarchiv-</b>
        </p>

       <p>
  Jedes Jahr sammelt das Weihnachtsarchiv Erinnerungen, Spuren und kleine Hinweise –
  damit nichts verloren geht.
</p>

<p>
  Dieses Jahr ist etwas schiefgegangen.
  Seiten haben sich gelöst, Fragmente sind verstreut.
</p>

<p>
  Gleich bekommst du deine eigenen Archivseiten.
  Die Rätsel lassen sich nur gemeinsam lösen.
  Wenn ihr alle Hinweise gefunden habt öffnet sich das Weihnachtsarchiv für das, was dieses Jahr auf euch wartet.
</p>

        <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.14)", margin: "14px 0" }} />

        <p><b>Regeln:</b></p>
        <ul style={{ margin: "8px 0 0 18px", color: "rgba(255,255,255,0.78)" }}>
          <li>Nach jeder Lösung kommst du in einen <b>Warteraum</b>.</li>
          <li>Erst weiter, wenn alle „bereit“ sagen (Stern antippen).</li>
          <li>Wenn du festhängst: <b>sag’s laut</b> – es ist ein Teamspiel.</li>
        </ul>

        <div className="btnRow" style={{ marginTop: 14 }}>
          <button className="primary" onClick={() => nav(go("mama", 1, "play"))}>
            ✶ Starten
          </button>
          <Link to="/"><button>Zur Startseite</button></Link>
        </div>

        <p className="small" style={{ marginTop: 12 }}>
          Tipp: Helligkeit hochdrehen – manche Hinweise sind subtil. Und auto. Bildschirmdrehen ausschalten.
        </p>
      </div>
    </div>
  );
}
