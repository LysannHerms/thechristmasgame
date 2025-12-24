import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RevealWordStep from "../../components/RevealWordStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Soeren4() {
  const nav = useNavigate();

  // Optional: Guard, dass Step 3 erledigt ist
  useEffect(() => {
    if (!isDone("soeren", 3)) nav(go("soeren", 3, "wait"));
  }, [nav]);

  return (
    <RevealWordStep
      player="soeren"
      title="Fragment 4 – Erklären"
      word="Schneemann" // <- hier pro Person anderes Wort rein
      onContinue={() => {
        markDone("soeren", 4);
        nav(go("soeren", 4, "wait"));
      }}
    />
  );
}
