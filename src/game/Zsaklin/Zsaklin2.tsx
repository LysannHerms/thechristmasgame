import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import Game2QuizTokens from "../../components/Game2QuizTokens";

export default function Zsaklin2() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("zsaklin", 1)) nav(go("zsaklin", 1, "play"));
  }, [nav]);

  return (
    <Game2QuizTokens
      player="zsaklin"
      stepLabel="Fragment 2"
      onSuccess={() => {
        markDone("zsaklin", 2);
        nav(go("zsaklin", 2, "wait"));
      }}
    />
  );
}
