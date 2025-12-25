import type { PlayerId } from "./players";
type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Mode = "play" | "wait";
/* =====================
   STARTSEITEN (NEU)
===================== */
export const START: Record<PlayerId, string> = {
  oma: "o-start-9q1",
  mama: "m-start-2kf",
  papa: "p-start-7hc",
  soeren: "s-start-4tz",
  norman: "n-start-8aa",
  sina: "si-start-1pw",
  zsaklin: "z-start-6rm",
};

export function startPath(player: PlayerId) {
  return `/${player}/${START[player]}`;
}

/* =====================
   SPIEL & WARTE ROUTEN
===================== */
// statt ROUTES[player][step] -> ROUTES[player][step][mode]
export const ROUTES: Record<PlayerId, Record<Step, Record<Mode, string>>> = {
  oma: {
    1: { play: "o-7f3kq", wait: "o-7f3kq-w" },
    2: { play: "o-p9a2m", wait: "o-p9a2m-w" },
    3: { play: "o-x2n8v", wait: "o-x2n8v-w" },
    4: { play: "o-m4q1z", wait: "o-m4q1z-w" },
    5: { play: "o-k8t0b", wait: "o-k8t0b-w" },
    6: { play: "o-r3c7h", wait: "o-r3c7h-w" },
    7: { play: "o-z9d1p", wait: "o-z9d1p-w" },
    8: { play: "o-w6j2s", wait: "o-w6j2s-w" },
    9: { play: "o-f1n5u", wait: "o-f1n5u-w" },
  },
  mama: {
    1: { play: "m-7f3kq", wait: "m-7f3kq-w" },
    2: { play: "m-p9a2m", wait: "m-p9a2m-w" },
    3: { play: "m-x2n8v", wait: "m-x2n8v-w" },
    4: { play: "m-m4q1z", wait: "m-m4q1z-w" },
    5: { play: "m-k8t0b", wait: "m-k8t0b-w" },
    6: { play: "m-r3c7h", wait: "m-r3c7h-w" },
    7: { play: "m-z9d1p", wait: "m-z9d1p-w" },
    8: { play: "m-w6j2s", wait: "m-w6j2s-w" },
    9: { play: "m-f1n5u", wait: "m-f1n5u-w" },
  },
  papa: {
    1: { play: "p-7f3kq", wait: "p-7f3kq-w" },
    2: { play: "p-p9a2m", wait: "p-p9a2m-w" },
    3: { play: "p-x2n8v", wait: "p-x2n8v-w" },
    4: { play: "p-m4q1z", wait: "p-m4q1z-w" },
    5: { play: "p-k8t0b", wait: "p-k8t0b-w" },
    6: { play: "p-r3c7h", wait: "p-r3c7h-w" },
    7: { play: "p-z9d1p", wait: "p-z9d1p-w" },
    8: { play: "p-w6j2s", wait: "p-w6j2s-w" },
    9: { play: "p-f1n5u", wait: "p-f1n5u-w" },
  },
  soeren: {
    1: { play: "s-7f3kq", wait: "s-7f3kq-w" },
    2: { play: "s-p9a2m", wait: "s-p9a2m-w" },
    3: { play: "s-x2n8v", wait: "s-x2n8v-w" },
    4: { play: "s-m4q1z", wait: "s-m4q1z-w" },
    5: { play: "s-k8t0b", wait: "s-k8t0b-w" },
    6: { play: "s-r3c7h", wait: "s-r3c7h-w" },
    7: { play: "s-z9d1p", wait: "s-z9d1p-w" },
    8: { play: "s-w6j2s", wait: "s-w6j2s-w" },
    9: { play: "s-f1n5u", wait: "s-f1n5u-w" },
  },
  norman: {
    1: { play: "n-7f3kq", wait: "n-7f3kq-w" },
    2: { play: "n-p9a2m", wait: "n-p9a2m-w" },
    3: { play: "n-x2n8v", wait: "n-x2n8v-w" },
    4: { play: "n-m4q1z", wait: "n-m4q1z-w" },
    5: { play: "n-k8t0b", wait: "n-k8t0b-w" },
    6: { play: "n-r3c7h", wait: "n-r3c7h-w" },
    7: { play: "n-z9d1p", wait: "n-z9d1p-w" },
    8: { play: "n-w6j2s", wait: "n-w6j2s-w" },
    9: { play: "n-f1n5u", wait: "n-f1n5u-w" },
  },
  sina: {
    1: { play: "si-7f3kq", wait: "si-7f3kq-w" },
    2: { play: "si-p9a2m", wait: "si-p9a2m-w" },
    3: { play: "si-x2n8v", wait: "si-x2n8v-w" },
    4: { play: "si-m4q1z", wait: "si-m4q1z-w" },
    5: { play: "si-k8t0b", wait: "si-k8t0b-w" },
    6: { play: "si-r3c7h", wait: "si-r3c7h-w" },
    7: { play: "si-z9d1p", wait: "si-z9d1p-w" },
    8: { play: "si-w6j2s", wait: "si-w6j2s-w" },
    9: { play: "si-f1n5u", wait: "si-f1n5u-w" },
  },
  zsaklin: {
    1: { play: "z-7f3kq", wait: "z-7f3kq-w" },
    2: { play: "z-p9a2m", wait: "z-p9a2m-w" },
    3: { play: "z-x2n8v", wait: "z-x2n8v-w" },
    4: { play: "z-m4q1z", wait: "z-m4q1z-w" },
    5: { play: "z-k8t0b", wait: "z-k8t0b-w" },
    6: { play: "z-r3c7h", wait: "z-r3c7h-w" },
    7: { play: "z-z9d1p", wait: "z-z9d1p-w" },
    8: { play: "z-w6j2s", wait: "z-w6j2s-w" },
    9: { play: "z-f1n5u", wait: "z-f1n5u-w" },
  },
};

export function pathFor(player: PlayerId, step: Step, mode: Mode = "play") {
  return `/${player}/${ROUTES[player][step][mode]}`;
}
