import { BorderAnimation } from "../../components/BorderAnimation/BorderAnimation";

export const metadata = {
  title: "Proyectos - Bihotz Studio",
  description: "",
};

export default function Proyecto() {
  return (
    <div style={{ maxWidth: "80vw", margin: "auto" }}>
      <BorderAnimation top bottom right left>
        <p>PROYECTO</p>
      </BorderAnimation>
    </div>
  );
}
