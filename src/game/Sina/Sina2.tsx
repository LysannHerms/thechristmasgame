import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import Game2QuizTokens from "../../components/Game2QuizTokens";

export default function Sina2() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("sina", 1)) nav(go("sina", 1, "play"));
  }, [nav]);

  return (
    <Game2QuizTokens
      player="sina"
      stepLabel="Fragment 2"
      onSuccess={() => {
        markDone("sina", 2);
        nav(go("sina", 2, "wait"));
      }}
    />
  );
}
