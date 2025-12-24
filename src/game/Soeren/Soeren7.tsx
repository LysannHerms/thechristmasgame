import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CityHuntStep from "../../components/CityHuntStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import starImg from "../../assets/Stern3.png";

export default function Soeren7() {
  const nav = useNavigate();

  // Guard: Step 6 erledigt
  useEffect(() => {
    if (!isDone("soeren", 6)) nav(go("soeren", 6, "wait"));
  }, [nav]);

  return (
    <CityHuntStep
      player="soeren"
      title="Finale – finde die gesuchte Stadt"
      prompt="In welcher Hauptstadt im Norden gibt es zur Weihnachtszeit besonders kurze Tage, viel Dunkelheit – und überall Kerzen und Lichter?"
      target={{
        name: "Helsinki",
        lat: 60.1699,
        lng: 24.9384,
        radiusMeters: 60000, // 60km: fair auf Handy
      }}
      initialCenter={[52.52, 13.405]} // Berlin
      initialZoom={11}
      starIconUrl={starImg}
      onSolved={() => {
        markDone("soeren", 7);
        nav(go("soeren", 7, "wait"));
      }}
    />
  );
}
