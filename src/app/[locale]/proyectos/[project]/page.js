import projects from "@/mocks/projects.json";

import { getCldImageUrl } from "next-cloudinary";
import { getTranslations } from "@/utils/getTranslations";
import MediaProject from "@/components/MediaProject/MediaProject";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";

import styles from "./project.module.css";

export async function generateMetadata({ params }) {
  const { locale, project } = await params;
  const t = await getTranslations(locale, "Projects");
  const projectData = projects[project];

  return {
    title: t[project].titleMetaData,
    description: t[project].descriptionMetaData,
    keywords: t[project].seoKeywords,
    alternates: {
      canonical: `${locale}/proyectos/${project}`,
      languages: {
        en: `/en/proyectos/${project}`,
        es: `/es/proyectos/${project}`,
        ca: `/ca/proyectos/${project}`,
      },
    },
    openGraph: {
      images: getCldImageUrl({
        src:
          projectData.mediaCover.desktop[0].type === "video"
            ? projectData.mediaCover.desktop[0].coverId
            : projectData.mediaCover.desktop[0].id,
        width: projectData.mediaCover.desktop[0].width,
        height: projectData.mediaCover.desktop[0].height,
      }),
    },
  };
}

export async function generateStaticParams() {
  const locales = ["es", "en", "fr"];

  const params = locales.flatMap((locale) =>
    Object.entries(projects).map((project) => ({ locale, project: project[0] }))
  );

  return params;
}

export default async function Project({ params }) {
  const { locale, project } = await params;
  const t = await getTranslations(locale, "Projects");
  const projectData = projects[project];

  return (
    <div className={styles.project}>
      <div className={styles.projectInfo}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {projectData.client} {projectData.description}
          </h1>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <span className={styles.border} />
          </BorderAnimation>
          <p className={styles.description}>{t[project].description}</p>
        </div>

        <BorderAnimation
          className={styles.box}
          bottom={{ reverse: true }}
          top={{ reverse: true }}
          left
          right
        >
          <p className={styles.clientTitle}>{t.client}:</p>
          <a href={projectData.clientWebsite} target="_blank" rel="noopener">
            <p className={styles.client}>{projectData.client}</p>
          </a>
          <p className={styles.projectTitle}>{t.project}:</p>
          <p className={styles.project}>{projectData.name}</p>
          <p className={styles.creativeFieldsTitle}>CREATIVE FIELDS:</p>
          <p className={styles.creativeField}>{projectData.creativeFields}</p>
        </BorderAnimation>
      </div>
      <MediaProject project={projectData} />
    </div>
  );
}
