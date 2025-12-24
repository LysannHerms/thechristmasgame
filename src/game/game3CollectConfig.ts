import type { PlayerId } from "../lib/players";

export type Found = { kind: "symbol"; value: string } | { kind: "digit"; value: string };

export const GAME3_FOUND: Record<PlayerId, Found> = {
  // Beispiel: Oma hat das Plus
  oma: { kind: "symbol", value: "+" },

  // die anderen haben Zahlen (6 Stück)
  mama: { kind: "digit", value: "7" },
  papa: { kind: "digit", value: "1" },
  soeren: { kind: "digit", value: "9" },
  norman: { kind: "digit", value: "0" },
  sina: { kind: "digit", value: "4" },
  zsaklin: { kind: "digit", value: "2" },
};
