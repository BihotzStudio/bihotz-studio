import projects from "@/mocks/projects.json";

import { getCldImageUrl } from "next-cloudinary";
import { getTranslations } from "@/utils/getTranslations";
import MediaProject from "@/components/MediaProject/MediaProject";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";

import styles from "./project.module.css";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Projects");
  const project = projects[params.project];

  return {
    title: t[params.project].titleMetaData,
    description: t[params.project].descriptionMetaData,
    keywords: t[params.project].seoKeywords,
    alternates: {
      canonical: `${params.locale}/proyectos/${params.project}`,
      languages: {
        en: `/en/proyectos/${params.project}`,
        es: `/es/proyectos/${params.project}`,
        ca: `/ca/proyectos/${params.project}`,
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

export default async function Project({ params }) {
  const t = await getTranslations(params.locale, "Projects");
  const project = projects[params.project];

  return (
    <div className={styles.project}>
      <div className={styles.projectInfo}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {project.client} {project.description}
          </h1>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <span className={styles.border} />
          </BorderAnimation>
          <p className={styles.description}>{t[params.project].description}</p>
        </div>

        <BorderAnimation
          className={styles.box}
          bottom={{ reverse: true }}
          top={{ reverse: true }}
          left
          right
        >
          <p className={styles.clientTitle}>{t.client}:</p>
          <a href={project.clientWebsite} target="_blank" rel="noopener">
            <p className={styles.client}>{project.client}</p>
          </a>
          <p className={styles.projectTitle}>{t.project}:</p>
          <p className={styles.project}>{project.name}</p>
          <p className={styles.creativeFieldsTitle}>CREATIVE FIELDS:</p>
          <p className={styles.creativeField}>{project.creativeFields}</p>
        </BorderAnimation>
      </div>
      <MediaProject project={project} />
    </div>
  );
}
