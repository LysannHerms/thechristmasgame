import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RevealWordStep from "../../components/RevealWordStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Papa4() {
  const nav = useNavigate();

  // Optional: Guard, dass Step 3 erledigt ist
  useEffect(() => {
    if (!isDone("papa", 3)) nav(go("papa", 3, "wait"));
  }, [nav]);

  return (
    <RevealWordStep
      player="papa"
      title="Fragment 4 – Erklären"
      word="Lebkuchen" // <- hier pro Person anderes Wort rein
      onContinue={() => {
        markDone("papa", 4);
        nav(go("papa", 4, "wait"));
      }}
    />
  );
}
