import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CityHuntStep from "../../components/CityHuntStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import starImg from "../../assets/Stern3.png";

export default function Norman7() {
  const nav = useNavigate();

  // Guard: Step 6 erledigt
  useEffect(() => {
    if (!isDone("norman", 6)) nav(go("norman", 6, "wait"));
  }, [nav]);

  return (
    <CityHuntStep
      player="norman"
      title="Finale – finde die gesuchte Stadt"
      prompt="In welcher Hauptstadt gibt es zur Weihnachtszeit riesige „Winter Illuminations“ – obwohl Weihnachten dort kein traditioneller Feiertag ist?"
      target={{
        name: "Tokio",
        lat: 35.6895,
        lng: 139.6917,
        radiusMeters: 60000, // 60km: fair auf Handy
      }}
      initialCenter={[52.52, 13.405]} // Berlin
      initialZoom={11}
      starIconUrl={starImg}
      onSolved={() => {
        markDone("norman", 7);
        nav(go("norman", 7, "wait"));
      }}
    />
  );
}
