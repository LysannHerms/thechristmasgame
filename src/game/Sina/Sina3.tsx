import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import RotatedScratchFull from "../../components/RotatedScratchFull";
import bgStars from "../../assets/Sternenbild.png";

import hiddenImg from "../../assets/Kirche.png";

export default function Sina3() {
  const nav = useNavigate();
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!isDone("sina", 2)) nav(go("sina", 2, "wait"));
  }, [nav]);

  // ab X% darf man weiter (du kannst das anpassen)
  const canContinue = p >= 0.25;

  useEffect(() => {
    // Optional: wenn du nach X% automatisch weiter willst, sag Bescheid.
  }, [p]);

  return (
    <>
     <RotatedScratchFull
  hiddenImgSrc={hiddenImg}
  coverImgSrc={bgStars}
  brushSize={20}
  storageKey="scratch:sina:3"
  onProgress={setP}
/>

      {/* super minimaler Weiter-Button */}
      <button
        onClick={() => {
          if (!canContinue) return;
          markDone("sina", 3);
          nav(go("sina", 3, "wait"));
        }}
         style={{
    position: "fixed",
    left: 12,
    right: 12,
    bottom: "calc(12px + env(safe-area-inset-bottom))",
    padding: "14px 16px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.22)",
    background: canContinue ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
    color: "white",
    fontSize: 16,
    zIndex: 9999,
    opacity: canContinue ? 1 : 0.6,
  }}
      >
        Weiter
      </button>
    </>
  );
}
