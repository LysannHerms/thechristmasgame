import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GiftWrapStep from "../../components/GiftWrapStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Zsaklin6() {
  const nav = useNavigate();

  // Guard: Step 5 erledigt
  useEffect(() => {
    if (!isDone("zsaklin", 5)) nav(go("zsaklin", 5, "wait"));
  }, [nav]);

  return (
    <GiftWrapStep
      player="zsaklin"
      title="Fragment 6 – Geschenkpapier-Chaos"
      stepLabel="Dein Schritt"
      stepText="Leg das Geschenk mittig aufs Papier."
      digit="S"
      onContinue={() => {
        // wichtig: damit du in den WaitRoom darfst
        markDone("zsaklin", 6);
        nav(go("zsaklin", 6, "wait"));
      }}
    />
  );
}
