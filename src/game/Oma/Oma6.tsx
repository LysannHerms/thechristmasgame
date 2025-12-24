import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GiftWrapStep from "../../components/GiftWrapStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Oma6() {
  const nav = useNavigate();

  // Guard: Step 5 erledigt
  useEffect(() => {
    if (!isDone("oma", 5)) nav(go("oma", 5, "wait"));
  }, [nav]);

  return (
    <GiftWrapStep
      player="oma"
      title="Fragment 6 – Geschenkpapier-Chaos"
      stepLabel="Dein Schritt"
      stepText="Falte die Seitenkanten sauber ein (wie ein Umschlag), damit es ordentlich wird."
      digit="9"
      onContinue={() => {
        // wichtig: damit du in den WaitRoom darfst
        markDone("oma", 6);
        nav(go("oma", 6, "wait"));
      }}
    />
  );
}
