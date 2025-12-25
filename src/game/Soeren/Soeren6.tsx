import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GiftWrapStep from "../../components/GiftWrapStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Soeren6() {
  const nav = useNavigate();

  // Guard: Step 5 erledigt
  useEffect(() => {
    if (!isDone("soeren", 5)) nav(go("soeren", 5, "wait"));
  }, [nav]);

  return (
    <GiftWrapStep
      player="soeren"
      title="Fragment 6 – Geschenkpapier-Chaos"
      stepLabel="Dein Schritt"
      stepText="Roll das Geschenkpapier aus und glätte es."
      digit="S"
      onContinue={() => {
        // wichtig: damit du in den WaitRoom darfst
        markDone("soeren", 6);
        nav(go("soeren", 6, "wait"));
      }}
    />
  );
}
