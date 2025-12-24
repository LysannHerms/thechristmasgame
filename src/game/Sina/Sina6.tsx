import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GiftWrapStep from "../../components/GiftWrapStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Sina6() {
  const nav = useNavigate();

  // Guard: Step 5 erledigt
  useEffect(() => {
    if (!isDone("sina", 5)) nav(go("sina", 5, "wait"));
  }, [nav]);

  return (
    <GiftWrapStep
      player="sina"
      title="Fragment 6 – Geschenkpapier-Chaos"
      stepLabel="Dein Schritt"
      stepText="Falte das Papier um das Geschenk."
      digit="E"
      onContinue={() => {
        // wichtig: damit du in den WaitRoom darfst
        markDone("sina", 6);
        nav(go("sina", 6, "wait"));
      }}
    />
  );
}
