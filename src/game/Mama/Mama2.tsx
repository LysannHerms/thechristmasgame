import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import Game2QuizTokens from "../../components/Game2QuizTokens";

export default function Mama2() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("mama", 1)) nav(go("mama", 1, "play"));
  }, [nav]);

  return (
    <Game2QuizTokens
      player="mama"
      stepLabel="Fragment 2"
      onSuccess={() => {
        markDone("mama", 2);
        nav(go("mama", 2, "wait"));
      }}
    />
  );
}
