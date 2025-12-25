export type PlayerId =
  | "oma"
  | "mama"
  | "papa"
  | "soeren"
  | "norman"
  | "sina"
  | "zsaklin";

export const PLAYERS: Record<
  PlayerId,
  { label: string; from: string; to: string; accent: string }
> = {
  oma: { label: "Oma", from: " #9A50BC", to: " #2C023F", accent: "#d7b7ff" },
  mama: { label: "Mama", from: "#370C11", to: "#A2041B", accent: "#ffd1d1" },
  papa: { label: "Papa", from: "#171A1F", to: "#7698AF", accent: "#bcd3ff" },
  norman: {
    label: "Norman",
    from: "#021B21",
    to: "#62909B",
    accent: "#bff6f6",
  },
  sina: { label: "Sina", from: "#A65B00", to: "#F2C398", accent: "#fff1a6" },
  zsaklin: {
    label: "Zsaklin",
    from: "#591E26",
    to: "#B77B84",
    accent: "#ffd1e6",
  },
  soeren: {
    label: "Sören",
    from: " #0E2017",
    to: " #48543E",
    accent: "#bfffd2",
  },
};
