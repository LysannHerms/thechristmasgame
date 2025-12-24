import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GiftWrapStep from "../../components/GiftWrapStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Mama6() {
  const nav = useNavigate();

  // Guard: Step 5 erledigt
  useEffect(() => {
    if (!isDone("mama", 5)) nav(go("mama", 5, "wait"));
  }, [nav]);

  return (
    <GiftWrapStep
      player="mama"
      title="Fragment 6 – Geschenkpapier-Chaos"
      stepLabel="Dein Schritt"
      stepText="Binde die Schleife."
      digit="E"
      onContinue={() => {
        // wichtig: damit du in den WaitRoom darfst
        markDone("mama", 6);
        nav(go("mama", 6, "wait"));
      }}
    />
  );
}
