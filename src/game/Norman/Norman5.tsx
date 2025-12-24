import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FalseStoryStep from "../../components/FalseStoryStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Norman5() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("norman", 4)) nav(go("norman", 4, "wait"));
  }, [nav]);

  const story =
    "Am Heiligabend fährt die Familie mit der U-Bahn direkt bis zum Weihnachtsmarkt am Wannsee.\n" +
    "Dort trinken sie heißen Kakao aus Maßkrügen und hören die Kirchenglocken des Fernsehturms.\n" +
    "Später laufen sie durch frisch verschneite Straßen zum Brandenburger Tor, wo ein Kaminfeuer brennt.\n" +
    "Zum Abschluss gehen alle noch schnell Schlittschuhlaufen auf der Spree, bevor sie nach Hause fahren.";

  return (
    <FalseStoryStep
      player="norman"
      title="Fragment 5 – Die Geschichte"
      story={story}
      onContinue={() => {
        markDone("norman", 5);            // ✅ DAS war der fehlende Schritt
        nav(go("norman", 5, "wait"));
      }}
    />
  );
}
