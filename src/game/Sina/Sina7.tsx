import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CityHuntStep from "../../components/CityHuntStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import starImg from "../../assets/Stern3.png";

export default function Sina7() {
  const nav = useNavigate();

  // Guard: Step 6 erledigt
  useEffect(() => {
    if (!isDone("sina", 6)) nav(go("sina", 6, "wait"));
  }, [nav]);

  return (
    <CityHuntStep
      player="sina"
      title="Finale – finde die gesuchte Stadt"
      prompt="In welcher Hauptstadt wird am 13. Dezember das Luciafest mit Kerzen und weißen Gewändern gefeiert?"
      target={{
        name: "Stockholm",
        lat: 59.3293,
        lng: 18.0680,
        radiusMeters: 60000, // 60km: fair auf Handy
      }}
      initialCenter={[52.52, 13.405]} // Berlin
      initialZoom={11}
      starIconUrl={starImg}
      onSolved={() => {
        markDone("sina", 7);
        nav(go("sina", 7, "wait"));
      }}
    />
  );
}
