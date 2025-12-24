import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GiftWrapStep from "../../components/GiftWrapStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Papa6() {
  const nav = useNavigate();

  // Guard: Step 5 erledigt
  useEffect(() => {
    if (!isDone("papa", 5)) nav(go("papa", 5, "wait"));
  }, [nav]);

  return (
    <GiftWrapStep
      player="papa"
      title="Fragment 6 – Geschenkpapier-Chaos"
      stepLabel="Dein Schritt"
      stepText="Klebe die Seiten zu."
      digit="R"
      onContinue={() => {
        // wichtig: damit du in den WaitRoom darfst
        markDone("papa", 6);
        nav(go("papa", 6, "wait"));
      }}
    />
  );
}
