import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GiftWrapStep from "../../components/GiftWrapStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Norman6() {
  const nav = useNavigate();

  // Guard: Step 5 erledigt
  useEffect(() => {
    if (!isDone("norman", 5)) nav(go("norman", 5, "wait"));
  }, [nav]);

  return (
    <GiftWrapStep
      player="norman"
      title="Fragment 6 – Geschenkpapier-Chaos"
      stepLabel="Dein Schritt"
      stepText="Wickle das Geschenkband rum"
      digit="N"
      onContinue={() => {
        // wichtig: damit du in den WaitRoom darfst
        markDone("norman", 6);
        nav(go("norman", 6, "wait"));
      }}
    />
  );
}
