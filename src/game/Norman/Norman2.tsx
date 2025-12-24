import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import Game2QuizTokens from "../../components/Game2QuizTokens";

export default function Norman2() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("norman", 1)) nav(go("norman", 1, "play"));
  }, [nav]);

  return (
    <Game2QuizTokens
      player="norman"
      stepLabel="Fragment 2"
      onSuccess={() => {
        markDone("norman", 2);
        nav(go("norman", 2, "wait"));
      }}
    />
  );
}
