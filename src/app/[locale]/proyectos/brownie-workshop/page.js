import { getCldImageUrl } from "next-cloudinary";

import ProjectLayout from "@/components/layout/ProjectLayout/ProjectLayout";
import projects from "@/mocks/projects.json";

import { getTranslations } from "@/utils/getTranslations";

import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";

import styles from "./brownie-workshop.module.css";

const PROJECT_NAME = "brownie-workshop";

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

export default async function BrownieWorkshop({ params }) {
  const t = await getTranslations(params.locale, "Projects");

  return (
    <ProjectLayout projectName={PROJECT_NAME} locale={params.locale}>
      <div className={`${styles.section} ${styles.sectionBackground}`}>
        <section className={styles.card}>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <h2 className={styles.cardTitle}>
              {t[PROJECT_NAME].page.section1.title}
            </h2>
          </BorderAnimation>
          <div className={styles.cardContainer}>
            <CloudinaryImage
              priority
              media={{
                height: "1800",
                width: "2880",
                alt: t[PROJECT_NAME].page.section1.altImage,
                id: "Workshop_01_01",
              }}
              className={styles.cardImage}
              sizes="100vw"
            />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                {t[PROJECT_NAME].page.section1.description}
              </p>
              <p className={styles.cardText}>
                {t[PROJECT_NAME].page.section1.activitiesTitle}
              </p>
              <ul className={styles.list}>
                {t[PROJECT_NAME].page.section1.activities.map(
                  (activity, index) => (
                    <li key={index} className={styles.listItem}>
                      <span className={styles.textCardSquare} />
                      {activity}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.reverseCard}>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <h2 className={styles.cardTitle}>
              {t[PROJECT_NAME].page.section2.title}
            </h2>
          </BorderAnimation>
          <div className={styles.cardContainer}>
            <CloudinaryImage
              priority
              media={{
                height: "1800",
                width: "2880",
                alt: t[PROJECT_NAME].page.section2.altImage,
                id: "Workshop_01_02",
              }}
              className={styles.cardImage}
              sizes="100vw"
            />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                {t[PROJECT_NAME].page.section2.description}
              </p>
              <ul className={styles.list}>
                {t[PROJECT_NAME].page.section2.activities.map(
                  (activity, index) => (
                    <li key={index} className={styles.listItem}>
                      <span className={styles.textCardSquare} />
                      {activity}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.section}>
        <section className={styles.card}>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <h2 className={styles.cardTitle}>
              {t[PROJECT_NAME].page.section3.title}
            </h2>
          </BorderAnimation>
          <div className={styles.cardContainer}>
            <CloudinaryImage
              priority
              media={{
                height: "1800",
                width: "2880",
                alt: t[PROJECT_NAME].page.section3.altText,
                id: "Workshop_02_01",
              }}
              className={styles.cardImage}
              sizes="100vw"
            />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                {t[PROJECT_NAME].page.section3.description1}
              </p>
              <p className={styles.cardText}>
                {t[PROJECT_NAME].page.section3.description2}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.reverseCard}>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <h2 className={styles.cardTitle}>
              {t[PROJECT_NAME].page.section4.title}
            </h2>
          </BorderAnimation>
          <div className={styles.cardContainer}>
            <CloudinaryImage
              priority
              media={{
                height: "1800",
                width: "2880",
                alt: t[PROJECT_NAME].page.section4.altImage,
                id: "Workshop_03",
              }}
              className={styles.cardImage}
              sizes="100vw"
            />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                {t[PROJECT_NAME].page.section4.description}
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className={`${styles.card} ${styles.fullWidthCard}`}>
        <BorderAnimation
          className={`${styles.border} ${styles.marginsInline}`}
          bottom={{ reverse: true }}
        >
          <h2 className={styles.cardTitle}>
            {t[PROJECT_NAME].page.section5.title}
          </h2>
        </BorderAnimation>
        <div className={styles.cardContainer}>
          <CloudinaryImage
            priority
            media={{
              height: "1800",
              width: "2880",
              alt: t[PROJECT_NAME].page.section5.altImage,
              id: "Workshop_04",
            }}
            className={styles.cardImage}
            sizes="100vw"
          />
          <div className={`${styles.cardContent} ${styles.marginsInline}`}>
            <p className={styles.cardText}>
              {t[PROJECT_NAME].page.section5.description}
            </p>

            <ul className={styles.list}>
              {t[PROJECT_NAME].page.section5.activities.map(
                (activity, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.textCardSquare} />
                    {activity}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>{t[PROJECT_NAME].footer}</p>
      </footer>
    </ProjectLayout>
  );
}
