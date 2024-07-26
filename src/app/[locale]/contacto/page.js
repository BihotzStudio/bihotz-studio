import Logo from "@/components/icons/logo";
import Link from "next/link";

import styles from "../home.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { Footer } from "@/components/layout/footer/Footer";
import { getTranslations } from "@/utils/getTranslations";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Home");

  return {
    description: t.metaDescription,
  };
}

export default async function Contacto({ params }) {
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
            <CloudinaryImage
              priority
              className={styles.image}
              sizes="40vw"
              media={{
                altImage: t.altImage,
                id: "portada_wcs0vl",
                fill: true,
                style: { objectFit: "cover" },
              }}
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
            <h2 className={styles.description}>{t.description}</h2>
          </div>
        </BorderAnimation>
        <div className={styles.imageSmallScreen}>
          <CloudinaryImage
            priority
            className={styles.image}
            sizes="100vw"
            media={{
              altImage: t.altImage,
              id: "portada_wcs0vl",
              fill: true,
              style: { objectFit: "cover", objectPosition: "bottom" },
            }}
          />
        </div>
        <BorderAnimation
          top={{ duration: "2s", className: styles.hideBoder }}
          className={styles.footerBorder}
        >
          <Footer className={styles.contact} locale={params.locale} />
        </BorderAnimation>
        <BorderAnimation left={{ duration: "1s" }}>
          <div className={styles.secondaryImage}>
            <CloudinaryImage
              sizes="30vw"
              media={{
                altImage: t.altSecondaryImage,
                id: "home_1_gb050t",
                fill: true,
                style: { objectFit: "cover" },
              }}
            />
          </div>
        </BorderAnimation>
      </div>
    </div>
  );
}
