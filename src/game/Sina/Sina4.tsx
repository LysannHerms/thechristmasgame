import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RevealWordStep from "../../components/RevealWordStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Sina4() {
  const nav = useNavigate();

  // Optional: Guard, dass Step 3 erledigt ist
  useEffect(() => {
    if (!isDone("sina", 3)) nav(go("sina", 3, "wait"));
  }, [nav]);

  return (
    <RevealWordStep
      player="sina"
      title="Fragment 4 – Erklären"
      word="Frau Holle" // <- hier pro Person anderes Wort rein
      onContinue={() => {
        markDone("sina", 4);
        nav(go("sina", 4, "wait"));
      }}
    />
  );
}
