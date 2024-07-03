import projects from "@/mocks/projects.json";

import styles from "./project.module.css";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";
import { getCldImageUrl } from "next-cloudinary";
import { isBot } from "@/utils/isBot";
import { Video } from "@/components/Video/Video";
import { getTranslations } from "@/utils/getTranslations";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Projects");

  return {
    title: t[params.project].titleMetaData,
    description: t[params.project].descriptionMetaData,
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
      {project.mediaDetails.map((media, index) => (
        <div key={media.id} className={styles.imageContainer}>
          {media.type === "video" ? (
            <Video
              key={media.url}
              url={media.url}
              style={{ width: "100%", height: "auto" }}
              className={styles.image}
              muted
              playsInline
              poster={getCldImageUrl({
                src: media.coverId,
                width: media.width,
                height: media.height,
              })}
              isBot={isBot()}
            />
          ) : (
            <CloudinaryImage
              priority={index === 0}
              media={media}
              className={styles.image}
              sizes="100vw"
            />
          )}
        </div>
      ))}
    </div>
  );
}
