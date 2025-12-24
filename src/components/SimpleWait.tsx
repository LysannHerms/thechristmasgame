import WaitRoom from "./WaitRoom";
import bgStars from "../assets/Sternenbild.png";
import starImg from "../assets/Stern3.png";
import type { PlayerId } from "../lib/players";

export default function SimpleWait({
  player,
  step,
  title = "Super, du hast es geschafft!",
  subtitle = "Wenn alle Wörter erraten wurden, kannst du auf den Stern klicken.",
}: {
  player: PlayerId;
  step: number;
  title?: string;
  subtitle?: string;
}) {
  return (
    <WaitRoom
      player={player}
      step={step as any}
      title={title}
      subtitle={subtitle}
      bgImgSrc={bgStars}
      starImgSrc={starImg}
      // kein extra, Stern ist aktiv, aber nur wenn step DONE ist (Guard)
      disableStar={false}
    />
  );
}
