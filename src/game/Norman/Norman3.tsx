import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import RotatedScratchFull from "../../components/RotatedScratchFull";
import bgStars from "../../assets/Sternenbild.png";
import hiddenImg from "../../assets/Museum.png";

export default function Norman3() {
  const nav = useNavigate();
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!isDone("norman", 2)) nav(go("norman", 2, "wait"));
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
  storageKey="scratch:norman:3"
  onProgress={setP}
/>

      {/* super minimaler Weiter-Button */}
      <button
        onClick={() => {
          if (!canContinue) return;
          markDone("norman", 3);
          nav(go("norman", 3, "wait"));
        }}
        style={{
          position: "fixed",
          left: 12,
          bottom: 12,
          right: 12,
          padding: "14px 16px",
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.22)",
          background: canContinue ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
          color: "white",
          fontSize: 16,
          zIndex: 20,
          opacity: canContinue ? 1 : 0.6,
        }}
      >
        Weiter
      </button>
    </>
  );
}
