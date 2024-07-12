import projects from "@/mocks/projects.json";

import { getCldImageUrl } from "next-cloudinary";
import { getTranslations } from "@/utils/getTranslations";
import MediaProject from "@/components/MediaProject/MediaProject";

import styles from "./project.module.css";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Projects");
  const project = projects[params.project];

  return {
    title: t[params.project].titleMetaData,
    description: t[params.project].descriptionMetaData,
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
          <span className={styles.border} />
          <p className={styles.description}>{t[params.project].description}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.clientTitle}>{t.client}:</p>
          <a href={project.clientWebsite} target="_blank" rel="noopener">
            <p className={styles.client}>{project.client}</p>
          </a>
          <p className={styles.projectTitle}>{t.project}:</p>
          <p className={styles.project}>{project.name}</p>
          <p className={styles.creativeFieldsTitle}>CREATIVE FIELDS:</p>
          <p className={styles.creativeField}>{project.creativeFields}</p>
        </div>
      </div>
      <MediaProject project={project} />
    </div>
  );
}
