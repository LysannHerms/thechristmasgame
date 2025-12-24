import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CityHuntStep from "../../components/CityHuntStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import starImg from "../../assets/Stern3.png";

export default function Zsaklin7() {
  const nav = useNavigate();

  // Guard: Step 6 erledigt
  useEffect(() => {
    if (!isDone("zsaklin", 6)) nav(go("zsaklin", 6, "wait"));
  }, [nav]);

  return (
    <CityHuntStep
      player="zsaklin"
      title="Finale – finde die gesuchte Stadt"
      prompt="In welcher Hauptstadt im Norden gibt es zur Weihnachtszeit besonders kurze Tage, viel Dunkelheit – und überall Kerzen und Lichter?"
      target={{
        name: "Paris",
        lat: 48.8566,
        lng: 2.3522,
        radiusMeters: 60000, // 60km: fair auf Handy
      }}
      initialCenter={[52.52, 13.405]} // Berlin
      initialZoom={11}
      starIconUrl={starImg}
      onSolved={() => {
        markDone("zsaklin", 7);
        nav(go("zsaklin", 7, "wait"));
      }}
    />
  );
}
