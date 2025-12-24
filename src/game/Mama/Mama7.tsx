import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CityHuntStep from "../../components/CityHuntStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import starImg from "../../assets/Stern3.png";

export default function Mama7() {
  const nav = useNavigate();

  // Guard: Step 6 erledigt
  useEffect(() => {
    if (!isDone("mama", 6)) nav(go("mama", 6, "wait"));
  }, [nav]);

  return (
    <CityHuntStep
      player="mama"
      title="Finale – finde die gesuchte Stadt"
      prompt="In welcher Stadt leuchten zur Weihnachtszeit die berühmten Christmas Lights in der Oxford Street und am Piccadilly Circus?"
      target={{
        name: "London",
        lat: 51.5074,
        lng: -0.1278,
        radiusMeters: 60000, // 60km: fair auf Handy
      }}
      initialCenter={[52.52, 13.405]} // Berlin
      initialZoom={11}
      starIconUrl={starImg}
      onSolved={() => {
        markDone("mama", 7);
        nav(go("mama", 7, "wait"));
      }}
    />
  );
}
