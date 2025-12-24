import SimpleWait from "../../components/SimpleWait";

export default function Oma4Wait() {
  return (
    <SimpleWait
      player="oma"
      step={4}
      title="Super, du hast es geschafft!"
      subtitle="Wenn alle Wörter erraten wurden, kannst du auf den Stern klicken."
    />
  );
}
