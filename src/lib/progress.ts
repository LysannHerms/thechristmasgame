export type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function key(player: string, step: Step) {
  return `xmas25:${player}:step:${step}:done`;
}

export function isDone(player: string, step: Step) {
  return localStorage.getItem(key(player, step)) === "1";
}

export function markDone(player: string, step: Step) {
  localStorage.setItem(key(player, step), "1");
}

export function lockStep(player: string, step: Step) {
  localStorage.removeItem(key(player, step));
}

// Schaltet alle Steps 1..target frei (praktisch, wenn jemand „hängt“)
export function unlockUpTo(player: string, target: Step) {
  for (let s = 1; s <= target; s++) {
    localStorage.setItem(key(player, s as Step), "1");
  }
}

// Löscht nur eine Person
export function resetPlayer(player: string) {
  Object.keys(localStorage).forEach((k) => {
    if (k.startsWith(`xmas25:${player}:step:`)) localStorage.removeItem(k);
  });
}

// Notbremse (falls du sie doch mal brauchst)
export function resetAll() {
  Object.keys(localStorage).forEach((k) => {
    if (k.startsWith("xmas25:")) localStorage.removeItem(k);
  });
}
