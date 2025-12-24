import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, markDone } from "../../lib/progress";
import { go } from "../../lib/nav";
import Game2QuizTokens from "../../components/Game2QuizTokens";

export default function Soeren2() {
  const nav = useNavigate();

  useEffect(() => {
    if (!isDone("soeren", 1)) nav(go("soeren", 1, "play"));
  }, [nav]);

  return (
    <Game2QuizTokens
      player="soeren"
      stepLabel="Fragment 2"
      onSuccess={() => {
        markDone("soeren", 2);
        nav(go("soeren", 2, "wait"));
      }}
    />
  );
}
