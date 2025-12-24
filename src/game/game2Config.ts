import type { PlayerId } from "../lib/players";

export type NumRule =
  | { kind: "exact"; value: number }
  | { kind: "range"; min: number; max: number }
  | { kind: "oneOf"; values: number[] };

export type Reward = { letter: string };

export type Game2Question = {
  id: string;
  prompt: string;
  hint?: string;
  rule: NumRule;
  reward: Reward; // Buchstabe + Positionszahl
};

export type Game2Config = {
  title: string;
  intro: string;
  questions: Game2Question[];
};

export const GAME2: Record<PlayerId, Game2Config> = {
  papa: {
    title: "Fragment 2 – Archivfrage",
    intro: "Beantworte deine Frage. Du bekommst einen Token (Buchstabe+Zahl).",
    questions: [
      {
        id: "q",
        prompt: "Gründung des Landkreises Prignitz (Jahr)?",
        hint: "Multipliziere die letzten zwei Zahlen.",
        rule: { kind: "exact", value: 27 },
        reward: { letter: "R" },
      },
    ],
  },

  mama: {
    title: "Fragment 2 – Archivfrage",
    intro: "Beantworte deine Frage. Du bekommst einen Token (Buchstabe+Zahl).",
    questions: [
      {
        id: "q",
        prompt: "Umstellung des Uhrengetriebes (Drehstrommotor → Funk) (Jahr)?",
        hint: "Addiere die ersten zwei Zahlen mit den letzten zwei Zahlen.",
        rule: { kind: "exact", value: 113 },
        reward: { letter: "U" },
      },
    ],
  },

  oma: {
    title: "Fragment 2 – Archivfrage",
    intro: "Beantworte deine Frage. Du bekommst einen Token (Buchstabe+Zahl).",
    questions: [
      {
        id: "q",
        prompt: "Kaukasische Flügelnuss: Wie viele Blätter trägt ein gefiederter Stiel?",
        hint: "Antwort ist ein Bereich.",
        rule: { kind: "range", min: 7, max: 27 },
        reward: { letter: "D" },
      },
    ],
  },

  soeren: {
    title: "Fragment 2 – Archivfrage",
    intro: "Beantworte deine Frage. Du bekommst einen Token (Buchstabe+Zahl).",
    questions: [
      {
        id: "q",
        prompt: "Was sind die Postleitzahlen von Wanzer und Karstädt?",
        hint: "Berechne die Summe beider Quersumme der PLZ ",
        rule: { kind: "exact", value: 49 },
        reward: { letter: "O"},
      },
    ],
  },

  sina: {
    title: "Fragment 2 – Archivfrage",
    intro: "Beantworte deine Frage. Du bekommst einen Token (Buchstabe+Zahl).",
    questions: [
      {
        id: "q",
        prompt: "Welchen gesetzlichen Feiertag hat Sachsen-Anhalt, den Brandenburg nicht hat?",
        hint: "Addiere Monat und Tag des Feiertags.",
        rule: { kind: "exact", value: 7 },
        reward: { letter: "L"},
      },
    ],
  },

  zsaklin: {
    title: "Fragment 2 – Archivfrage",
    intro: "Beantworte deine Frage. Du bekommst einen Token (Buchstabe+Zahl).",
    questions: [
      {
        id: "q",
        prompt: "Telefonvorwahl Ungarn + längster Fluss in Ungarn durchs Land (597km)",
        hint: "Addiere beide Zahlen.",
        rule: { kind: "exact", value: 633 },
        reward: { letter: "F" },
      },
    ],
  },

  norman: {
    title: "Fragment 2 – Archivfrage",
    intro: "Beantworte deine Frage. Du bekommst einen Token (Buchstabe+Zahl).",
    questions: [
      {
        id: "q",
        prompt: "Wann ist die Geschichte „Der Hase und der Igel“ erschienen? (Jahr)",
        rule: { kind: "range", min: 1830, max: 1850 },
        reward: { letter: "U" },
      },
    ],
  },
};

