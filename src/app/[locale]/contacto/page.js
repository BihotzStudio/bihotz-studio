import Image from "next/image";

import styles from "./contacto.module.css";

export const metadata = {
  title: "Contacto - Bihotz Studio",
  description: "",
};

export default function Contacto() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{`LET'S WORK TOGETHER!`}</h1>
      </div>
      <div>
        <div className={styles.coverImage}>
          <Image
            alt=""
            src="/images/servicios.webp"
            fill
            priority
            className={styles.image}
            style={{ objectFit: "cover" }}
            sizes="30vw"
          />
        </div>
      </div>
    </div>
  );
}
