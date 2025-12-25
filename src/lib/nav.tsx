import type { PlayerId } from "./players";
import { pathFor, startPath } from "./routes";

export function go(
  player: PlayerId,
  step: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  mode: "play" | "wait" = "play"
) {
  return pathFor(player, step, mode);
}

export function start(player: PlayerId) {
  return startPath(player);
}
