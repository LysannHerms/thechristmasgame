import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import Game2QuizTokens from "../../components/Game2QuizTokens";

export default function Oma2() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("oma", 1)) nav(go("oma", 1, "play"));
  }, [nav]);

  return (
    <Game2QuizTokens
      player="oma"
      stepLabel="Fragment 2"
      onSuccess={() => {
        markDone("oma", 2);
        nav(go("oma", 2, "wait"));
      }}
    />
  );
}
