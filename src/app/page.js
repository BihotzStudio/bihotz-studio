import Logo from "@/components/icons/logo";
import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { Footer } from "@/components/layout/footer/Footer";

export const metadata = {
  description:
    "Somos un estudio de diseño y desarrollo web y app especializado en el sector retail. Colaboramos con grandes empresas ofreciendo servicios que les ayuden a hacer crecer y consolidar sus negocios digitales aportando experiencia en innovación digital.",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.secondary}>
        <BorderAnimation
          right={{ reverse: true }}
          className={styles.coverImage}
        >
          <div className={styles.containerImage}>
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
              sizes="100vw"
              quality={100}
            />
          </div>
        </BorderAnimation>
      </div>
      <div className={styles.main}>
        <BorderAnimation
          bottom={{ duration: "2s" }}
          className={styles.borderInfo}
        >
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
            style={{ objectFit: "contain", objectPosition: "center 225px" }}
            sizes="100vw"
            quality={100}
          />
        </div>
        <BorderAnimation
          top={{ duration: "2s", className: styles.hideBoder }}
          className={styles.footerBorder}
        >
          <Footer className={styles.contact} />
        </BorderAnimation>
        <BorderAnimation left={{ duration: "1s" }}>
          <div className={styles.secondaryImage}>
            <Image
              alt=""
              src="/images/home_1.webp"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
        </BorderAnimation>
      </div>
    </div>
  );
}
