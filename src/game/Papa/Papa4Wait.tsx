import SimpleWait from "../../components/SimpleWait";

export default function Papa4Wait() {
  return (
    <SimpleWait
      player="papa"
      step={4}
      title="Super, du hast es geschafft!"
      subtitle="Wenn alle Wörter erraten wurden, kannst du auf den Stern klicken."
    />
  );
}
