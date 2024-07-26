import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

import ProjectLayout from "@/components/layout/ProjectLayout/ProjectLayout";
import projects from "@/mocks/projects.json";

import { getTranslations } from "@/utils/getTranslations";

import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { Video } from "@/components/Video/Video";

import styles from "./brownie-ds.module.css";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";

const PROJECT_NAME = "brownie-ds";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Projects");
  const project = projects[PROJECT_NAME];

  return {
    title: t[PROJECT_NAME].titleMetaData,
    description: t[PROJECT_NAME].descriptionMetaData,
    keywords: t[PROJECT_NAME].seoKeywords,
    alternates: {
      canonical: `${params.locale}/proyectos/${PROJECT_NAME}`,
      languages: {
        en: `/en/proyectos/${PROJECT_NAME}`,
        es: `/es/proyectos/${PROJECT_NAME}`,
        ca: `/ca/proyectos/${PROJECT_NAME}`,
      },
    },
    openGraph: {
      images: getCldImageUrl({
        src:
          project.mediaCover.desktop[0].type === "video"
            ? project.mediaCover.desktop[0].coverId
            : project.mediaCover.desktop[0].id,
        width: project.mediaCover.desktop[0].width,
        height: project.mediaCover.desktop[0].height,
      }),
    },
  };
}

export default async function BrownieDs({ params }) {
  const t = await getTranslations(params.locale, "Projects");

  return (
    <ProjectLayout projectName={PROJECT_NAME} locale={params.locale}>
      <section className={styles.imageContainer}>
        <Image
          alt="Imagen de fondo"
          src="/images/projects/brownie-ds/2.jpg"
          fill
          priority
          className={styles.backgroundImage}
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className={styles.textCard}>
          <div className={styles.titleTextCardContainer}>
            <span className={styles.textCardSquare} />
            <h2 className={styles.titleTextCard}>
              {t[PROJECT_NAME].atomicDesign}
            </h2>
          </div>
          <p className={styles.descriptionTextCard}>
            {t[PROJECT_NAME].atomicDesignDescription}
          </p>
        </div>
        <div className={styles.textCard}>
          <div className={styles.titleTextCardContainer}>
            <span className={styles.textCardSquare} />
            <h2 className={styles.titleTextCard}>
              {t[PROJECT_NAME].consistency}
            </h2>
          </div>
          <p className={styles.descriptionTextCard}>
            {t[PROJECT_NAME].consistencyDescription}
          </p>
        </div>
        <div className={styles.textCard}>
          <div className={styles.titleTextCardContainer}>
            <span className={styles.textCardSquare} />
            <h2 className={styles.titleTextCard}>
              {t[PROJECT_NAME].variables}
            </h2>
          </div>
          <p className={styles.descriptionTextCard}>
            {t[PROJECT_NAME].variablesDescription}
          </p>
        </div>
        <div className={styles.textCard}>
          <div className={styles.titleTextCardContainer}>
            <span className={styles.textCardSquare} />
            <h2 className={styles.titleTextCard}>
              {t[PROJECT_NAME].accessibility}
            </h2>
          </div>
          <p className={styles.descriptionTextCard}>
            {t[PROJECT_NAME].accessibilityDescription}
          </p>
        </div>
        <div className={styles.textCard}>
          <div className={styles.titleTextCardContainer}>
            <span className={styles.textCardSquare} />
            <h2 className={styles.titleTextCard}>
              {t[PROJECT_NAME].acceleration}
            </h2>
          </div>
          <p className={styles.descriptionTextCard}>
            {t[PROJECT_NAME].accelerationDescription}
          </p>
        </div>
        <div className={styles.textCard}>
          <div className={styles.titleTextCardContainer}>
            <span className={styles.textCardSquare} />
            <h2 className={styles.titleTextCard}>
              {t[PROJECT_NAME].efficiency}
            </h2>
          </div>
          <p className={styles.descriptionTextCard}>
            {t[PROJECT_NAME].efficiencyDescription}
          </p>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsHeader}>
          <h2 className={styles.cardsTitle}>
            {t[PROJECT_NAME].smoothInteractions}
          </h2>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <span className={styles.border} />
          </BorderAnimation>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <p className={styles.cardDescription}>
              {t[PROJECT_NAME].addToWishlist}
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardDescription}>{t[PROJECT_NAME].addToBag}</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardDescription}>{t[PROJECT_NAME].toggle}</p>
          </div>
        </div>
      </section>

      <section className={styles.mediaContainer}>
        <CloudinaryImage
          priority
          media={{
            height: "1800",
            width: "2880",
            altImage: "Diseño del proyecto del sistema de diseño de Brownie",
            id: "4_xmf40v",
          }}
          className={styles.backgroundImage}
          sizes="100vw"
        />
      </section>

      <section className={styles.videoContainer}>
        <Video
          url="https://res.cloudinary.com/deayvavyl/video/upload/v1719771975/5_nwyogl.mp4"
          style={{ width: "100%", height: "auto" }}
          className={styles.backgroundImage}
          muted
          playsInline
          poster={getCldImageUrl({
            src: "",
            width: "3456",
            height: "2160",
          })}
        />
      </section>

      <section className={`${styles.cardsSection} ${styles.backgroundColor}`}>
        <div className={styles.cardsHeader}>
          <h2 className={styles.cardsTitle}>
            {t[PROJECT_NAME].reusableAnimations}
          </h2>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <span className={styles.border} />
          </BorderAnimation>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <p className={styles.cardDescription}>
              {t[PROJECT_NAME].wishlistInformation}
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardDescription}>
              {t[PROJECT_NAME].customizableItem}
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardDescription}>
              {t[PROJECT_NAME].newNotice}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.videoContainer}>
        <Video
          url="https://res.cloudinary.com/deayvavyl/video/upload/v1719771977/7_d1vumk.mp4"
          style={{ width: "100%", height: "auto" }}
          className={styles.backgroundImage}
          muted
          playsInline
          poster={getCldImageUrl({
            src: "",
            width: "3456",
            height: "2160",
          })}
        />
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>{t[PROJECT_NAME].footer}</p>
      </footer>
    </ProjectLayout>
  );
}
