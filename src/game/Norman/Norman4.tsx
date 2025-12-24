import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RevealWordStep from "../../components/RevealWordStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Zsaklin4() {
  const nav = useNavigate();

  // Optional: Guard, dass Step 3 erledigt ist
  useEffect(() => {
    if (!isDone("norman", 3)) nav(go("norman", 3, "wait"));
  }, [nav]);

  return (
    <RevealWordStep
      player="norman"
      title="Fragment 4 – Erklären"
      word="Zimtstern" // <- hier pro Person anderes Wort rein
      onContinue={() => {
        markDone("norman", 4);
        nav(go("norman", 4, "wait"));
      }}
    />
  );
}
