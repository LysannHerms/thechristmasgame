import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import Game2QuizTokens from "../../components/Game2QuizTokens";

export default function Papa2() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("papa", 1)) nav(go("papa", 1, "play"));
  }, [nav]);

  return (
    <Game2QuizTokens
      player="papa"
      stepLabel="Fragment 2"
      onSuccess={() => {
        markDone("papa", 2);
        nav(go("papa", 2, "wait"));
      }}
    />
  );
}
