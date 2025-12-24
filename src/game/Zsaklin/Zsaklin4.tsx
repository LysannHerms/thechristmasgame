import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RevealWordStep from "../../components/RevealWordStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Zsaklin4() {
  const nav = useNavigate();

  // Optional: Guard, dass Step 3 erledigt ist
  useEffect(() => {
    if (!isDone("zsaklin", 3)) nav(go("zsaklin", 3, "wait"));
  }, [nav]);

  return (
    <RevealWordStep
      player="zsaklin"
      title="Fragment 4 – Erklären"
      word="Nussknacker/ Diótörő" // <- hier pro Person anderes Wort rein
      onContinue={() => {
        markDone("zsaklin", 4);
        nav(go("zsaklin", 4, "wait"));
      }}
    />
  );
}
