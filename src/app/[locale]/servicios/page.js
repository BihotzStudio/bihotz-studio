import Image from "next/image";

import styles from "./servicios.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { Footer } from "@/components/layout/footer/Footer";
import { getTranslations } from "@/utils/getTranslations";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Services");

  return {
    title: t.titleMetaData,
    description: t.metaDescription,
    alternates: {
      canonical: `${params.locale}/servicios`,
      languages: {
        en: "/en/servicios",
        es: "/es/servicios",
        ca: "/ca/servicios",
      },
    },
  };
}

export default async function Servicios({ params }) {
  const t = await getTranslations(params.locale, "Services");

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <BorderAnimation
          className={styles.borderAnimation}
          top={{
            className: styles.hideBorderTop,
            delay: "1s",
          }}
          left={{ className: styles.hideBorderLeft }}
          bottom={{ reverse: true }}
          right={{
            reverse: true,
            delay: "1s",
            className: styles.hideBorderRight,
          }}
        >
          <div className={styles.containerInfo}>
            <p className={styles.number}>01.</p>
            <br />
            <p>{t.designTitle}</p>
            <p className={styles.description}>{t.designDescription}</p>
          </div>
        </BorderAnimation>
        <BorderAnimation
          className={styles.borderAnimation}
          top={{
            className: styles.hideBorderTop,
            delay: "1s",
          }}
          left={{ className: styles.hideBorderLeft }}
          bottom={{ delay: "2s" }}
          right={{
            delay: "1s",
            className: styles.hideBorderRight,
          }}
        >
          <div className={styles.containerInfo}>
            <p className={styles.number}>02.</p>
            <br />
            <p>{t.developmentTitle}</p>
            <p className={styles.description}>{t.developmentDescription}</p>
          </div>
        </BorderAnimation>
        <BorderAnimation
          className={styles.borderAnimation}
          top={{
            className: styles.hideBorderTop,
            delay: "1s",
          }}
          left={{ className: styles.hideBorderLeft }}
          bottom={{ reverse: true }}
          right={{
            reverse: true,
            delay: "1s",
            className: styles.hideBorderRight,
          }}
        >
          <div className={styles.containerInfo}>
            <p className={styles.number}>03.</p>
            <br />
            <p>{t.brandingTitle}</p>
            <p className={styles.description}>{t.brandingDescription}</p>
          </div>
        </BorderAnimation>
        <BorderAnimation
          className={styles.borderAnimation}
          top={{
            className: styles.hideBorderTop,
            delay: "1s",
          }}
          left={{ className: styles.hideBorderLeft }}
          bottom={{ className: styles.hideBorderBottom }}
          right={{
            delay: "1s",
            className: styles.hideBorderRight,
          }}
        >
          <div className={styles.containerInfo}>
            <p className={styles.number}>04.</p>
            <br />
            <p>{t.implantTitle}</p>
            <p className={styles.description}>{t.implantDescription}</p>
          </div>
        </BorderAnimation>
      </div>
      <div>
        <div className={styles.coverImage}>
          <CloudinaryImage
            priority
            className={styles.image}
            sizes="30vw"
            media={{
              altImage: t.backgroundImageAlt,
              id: "servicios_chcikj",
              fill: true,
              style: { objectFit: "cover", objectPosition: "bottom" },
            }}
          />
        </div>
      </div>
      <BorderAnimation
        top={{ reverse: true, delay: "2s" }}
        right={{ className: styles.borderRightFooter, delay: "2s" }}
      >
        <Footer className={styles.footer} locale={params.locale} />
      </BorderAnimation>
    </div>
  );
}
