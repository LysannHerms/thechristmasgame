import { Link } from "react-router-dom";
import { start } from "../lib/nav";

export default function Index() {
  return (
    <div className="screen" style={{ background: "linear-gradient(135deg,#0b0b0f,#10301c)" }}>
      <h1>Das beschädigte Weihnachtsarchiv</h1>
      <p>
        Jedes Jahr werden Hinweise, Zahlen und Zeichen gesammelt, damit Dinge ihren Weg finden.
        Dieses Jahr ist das Archiv beschädigt. Findet die Fragmente – und öffnet am Ende die Truhe.
      </p>

      <div className="card">
        <h2>Start</h2>
        <p>Jede Person scannt ihren NFC-Stern. Du kannst aber auch hier manuell starten:</p>

         <div className="btnRow">
        <Link to={start("oma")}><button className="primary">Oma</button></Link>
        <Link to={start("mama")}><button className="primary">Mama</button></Link>
        <Link to={start("papa")}><button className="primary">Papa</button></Link>
        <Link to={start("soeren")}><button className="primary">Sören</button></Link>
        <Link to={start("norman")}><button className="primary">Norman</button></Link>
        <Link to={start("sina")}><button className="primary">Sina</button></Link>
        <Link to={start("zsaklin")}><button className="primary">Zsaklin</button></Link>
      </div>

        <p className="small">Notfall/Reset: <Link to="/admin">Admin</Link></p>
      </div>
    </div>
  );
}
