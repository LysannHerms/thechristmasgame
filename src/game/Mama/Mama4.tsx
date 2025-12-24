import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RevealWordStep from "../../components/RevealWordStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Zsaklin4() {
  const nav = useNavigate();

  // Optional: Guard, dass Step 3 erledigt ist
  useEffect(() => {
    if (!isDone("mama", 3)) nav(go("mama", 3, "wait"));
  }, [nav]);

  return (
    <RevealWordStep
      player="mama"
      title="Fragment 4 – Erklären"
      word="Schlitten" // <- hier pro Person anderes Wort rein
      onContinue={() => {
        markDone("mama", 4);
        nav(go("mama", 4, "wait"));
      }}
    />
  );
}
