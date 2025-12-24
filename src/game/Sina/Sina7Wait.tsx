import SimpleWait from "../../components/SimpleWait";

export default function Sina7Wait() {
  return (
    <SimpleWait
      player="sina"
      step={7}
      title="Finale geschafft!"
      subtitle="Warte kurz auf die anderen. Wenn alle fertig sind, klickt gemeinsam den Stern."
    />
  );
}
