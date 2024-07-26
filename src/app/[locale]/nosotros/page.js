import Logo from "@/components/icons/logo";
import Link from "next/link";

import styles from "./nosotros.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { Footer } from "@/components/layout/footer/Footer";
import { getTranslations } from "@/utils/getTranslations";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "About");

  return {
    title: t.seoTitle,
    description: t.metaDescription,
  };
}

export default async function Nosotros({ params }) {
  const t = await getTranslations(params.locale, "About");

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
                id: "nosotros",
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
            <p className={styles.description}>{t.description}</p>
            <div className={styles.imageSmallScreen}>
              <CloudinaryImage
                priority
                className={styles.image}
                sizes="100vw"
                media={{
                  altImage: t.altImage,
                  id: "nosotros",
                  width: 675,
                  height: 900,
                }}
              />
            </div>
            <p className={styles.description}>{t.secondaryDescription}</p>
          </div>
        </BorderAnimation>
        <BorderAnimation
          top={{ duration: "2s", className: styles.hideBoder }}
          className={styles.footerBorder}
        >
          <Footer className={styles.contact} locale={params.locale} />
        </BorderAnimation>
        <BorderAnimation left={{ duration: "1s" }}>
          <div className={styles.secondaryImage}>
            <CloudinaryImage
              sizes="(max-width: 640px) 100vw, 40vw"
              className={styles.image}
              media={{
                altImage: t.altSecondaryImage,
                id: "puerta-bihotz-studio",
                width: 1320,
                height: 655,
              }}
            />
          </div>
        </BorderAnimation>
      </div>
    </div>
  );
}
