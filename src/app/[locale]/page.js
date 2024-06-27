import Logo from "@/components/icons/logo";
import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { Footer } from "@/components/layout/footer/Footer";
import { getTranslations } from "@/utils/getTranslations";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Home");

  return {
    description: t.description,
  };
}

export default async function Home({ params }) {
  const t = await getTranslations(params.locale, "Home");

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
              alt={t.altImage}
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
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.description}>{t.description}</p>
          </div>
        </BorderAnimation>
        <div className={styles.imageSmallScreen}>
          <Image
            alt={t.altImage}
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
              alt={t.altSecondaryImage}
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
