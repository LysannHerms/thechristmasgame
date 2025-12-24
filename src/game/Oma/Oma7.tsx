import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CityHuntStep from "../../components/CityHuntStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import starImg from "../../assets/Stern3.png";

export default function Oma7() {
  const nav = useNavigate();

  // Guard: Step 6 erledigt
  useEffect(() => {
    if (!isDone("oma", 6)) nav(go("oma", 6, "wait"));
  }, [nav]);

  return (
    <CityHuntStep
      player="oma"
      title="Finale – finde die gesuchte Stadt"
      prompt="In welcher Hauptstadt gibt es einen der bekanntesten Weihnachtsmärkte Europas direkt vor einem Schloss und vor dem Rathaus?"
      target={{
        name: "Wien",
        lat: 48.2082,
        lng: 16.3738,
        radiusMeters: 60000, // 60km: fair auf Handy
      }}
      initialCenter={[52.52, 13.405]} // Berlin
      initialZoom={11}
      starIconUrl={starImg}
      onSolved={() => {
        markDone("oma", 7);
        nav(go("oma", 7, "wait"));
      }}
    />
  );
}
