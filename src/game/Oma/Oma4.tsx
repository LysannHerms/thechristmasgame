import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RevealWordStep from "../../components/RevealWordStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Oma4() {
  const nav = useNavigate();

  // Optional: Guard, dass Step 3 erledigt ist
  useEffect(() => {
    if (!isDone("oma", 3)) nav(go("oma", 3, "wait"));
  }, [nav]);

  return (
    <RevealWordStep
      player="oma"
      title="Fragment 4 – Erklären"
      word="Tannenbaum" // <- hier pro Person anderes Wort rein
      onContinue={() => {
        markDone("oma", 4);
        nav(go("oma", 4, "wait"));
      }}
    />
  );
}
