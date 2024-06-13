import Logo from "@/components/icons/logo";
import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";

export const metadata = {
  description:
    "Somos un estudio de diseño y desarrollo web y app especializado en el sector retail. Colaboramos con grandes empresas ofreciendo servicios que les ayuden a hacer crecer y consolidar sus negocios digitales aportando experiencia en innovación digital.",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.secondary}>
        <div className={styles.coverImage}>
          <Link href="/" className={styles.logo}>
            <Logo />
          </Link>
          <Image
            alt="Imagen en blanco y negro de una habitación minimalista con dos cuadros vacíos colgados en la pared y una silla moderna de diseño curvo colocada en el suelo de parqué."
            src="/images/portada.webp"
            fill
            priority
            className={styles.image}
            style={{ objectFit: "cover" }}
            sizes="30vw"
          />
        </div>
      </div>
      <div className={styles.main}>
        <BorderAnimation bottom className={styles.borderInfo}>
          <div className={styles.info}>
            <h1 className={styles.title}>Digital Design & Development.</h1>
            <p className={styles.description}>
              Somos un estudio de diseño y desarrollo web y app especializado en
              el sector retail. Colaboramos con grandes empresas ofreciendo
              servicios que les ayuden a hacer crecer y consolidar sus negocios
              digitales aportando experiencia en innovación digital.
            </p>
          </div>
        </BorderAnimation>

        <div className={styles.imageSmallScreen}>
          <Image
            alt="Imagen en blanco y negro de una habitación minimalista con dos cuadros vacíos colgados en la pared y una silla moderna de diseño curvo colocada en el suelo de parqué."
            src="/images/portada.webp"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center -130px" }}
            sizes="100vw"
          />
        </div>
        <footer className={styles.contact}>
          <p>info@bihotz-studio.com</p>
          <p>+34 697 525 425</p>
          <p>Siguenos en Instagram</p>
        </footer>
        <div className={styles.secondaryImage}>
          <Image
            alt=""
            src="/images/home_1.webp"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
