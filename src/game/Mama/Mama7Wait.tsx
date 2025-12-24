import SimpleWait from "../../components/SimpleWait";

export default function Mama7Wait() {
  return (
    <SimpleWait
      player="mama"
      step={7}
      title="Finale geschafft!"
      subtitle="Warte kurz auf die anderen. Wenn alle fertig sind, klickt gemeinsam den Stern."
    />
  );
}
