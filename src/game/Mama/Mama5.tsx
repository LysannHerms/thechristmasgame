import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FalseStoryStep from "../../components/FalseStoryStep";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";

export default function Mama5() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("mama", 4)) nav(go("mama", 4, "wait"));
  }, [nav]);

  const story =
    "Am Heiligabend fährt die Familie mit der U-Bahn direkt bis zum Weihnachtsmarkt am Wannsee.\n" +
    "Dort trinken sie heißen Kakao aus Maßkrügen und hören die Kirchenglocken des Fernsehturms.\n" +
    "Später laufen sie durch frisch verschneite Straßen zum Brandenburger Tor, wo ein Kaminfeuer brennt.\n" +
    "Zum Abschluss gehen alle noch schnell Schlittschuhlaufen auf der Spree, bevor sie nach Hause fahren.";

  return (
    <FalseStoryStep
      player="mama"
      title="Fragment 5 – Die Geschichte"
      story={story}
      onContinue={() => {
        markDone("mama", 5);            // ✅ DAS war der fehlende Schritt
        nav(go("mama", 5, "wait"));
      }}
    />
  );
}
