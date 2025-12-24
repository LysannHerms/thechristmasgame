import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CityHuntStep from "../../components/CityHuntStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import starImg from "../../assets/Stern3.png";

export default function Papa7() {
  const nav = useNavigate();

  // Guard: Step 6 erledigt
  useEffect(() => {
    if (!isDone("papa", 6)) nav(go("papa", 6, "wait"));
  }, [nav]);

  return (
    <CityHuntStep
      player="papa"
      title="Finale – finde die gesuchte Stadt"
      prompt="In welcher Stadt steht der berühmte Weihnachtsbaum am Rockefeller Center?"
      target={{
        name: "New York",
        lat: 40.7128,
        lng: -74.0060,
        radiusMeters: 60000, // 60km: fair auf Handy
      }}
      initialCenter={[52.52, 13.405]} // Berlin
      initialZoom={11}
      starIconUrl={starImg}
      onSolved={() => {
        markDone("papa", 7);
        nav(go("papa", 7, "wait"));
      }}
    />
  );
}
