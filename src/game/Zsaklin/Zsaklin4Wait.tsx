import SimpleWait from "../../components/SimpleWait";

export default function Zsaklin4Wait() {
  return (
    <SimpleWait
      player="zsaklin"
      step={4}
      title="Super, du hast es geschafft!"
      subtitle="Wenn alle Wörter erraten wurden, kannst du auf den Stern klicken."
    />
  );
}
