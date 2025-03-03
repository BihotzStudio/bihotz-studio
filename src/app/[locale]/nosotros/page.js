import { getCldImageUrl } from "next-cloudinary";
import Logo from "@/components/icons/logo";
import Link from "next/link";

import styles from "./nosotros.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { Footer } from "@/components/layout/footer/Footer";
import { getTranslations } from "@/utils/getTranslations";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations(locale, "About");

  return {
    title: t.seoTitle,
    description: t.metaDescription,
    keywords: t.seoKeywords,
    alternates: {
      canonical: `${locale}/nosotros/`,
      languages: {
        en: `/en/nosotros`,
        es: `/es/nosotros`,
        ca: `/ca/nosotros`,
      },
    },
    openGraph: {
      images: getCldImageUrl({
        src: "nosotros",
        width: 675,
        height: 900,
      }),
    },
  };
}

export default async function Nosotros({ params }) {
  const { locale } = await params;
  const t = await getTranslations(locale, "About");

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
            <BorderAnimation
              top={{ duration: "2s" }}
              bottom={{ duration: "2s", reverse: true }}
              className={styles.imageSmallScreen}
            >
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
            </BorderAnimation>
            <p className={styles.description}>{t.secondaryDescription}</p>
          </div>
        </BorderAnimation>
        <BorderAnimation
          top={{ duration: "2s", className: styles.hideBoder }}
          className={styles.footerBorder}
        >
          <Footer className={styles.contact} locale={locale} />
        </BorderAnimation>
        <BorderAnimation
          left={{ duration: "1s", className: styles.hideMobileBoder }}
        >
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
