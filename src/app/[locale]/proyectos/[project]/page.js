import projects from "@/mocks/projects.json";

import styles from "./project.module.css";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";
import { getCldImageUrl } from "next-cloudinary";
import { isBot } from "@/utils/isBot";
import { Video } from "@/components/Video/Video";

export default function Project({ params }) {
  const project = projects[params.project];

  return (
    <div className={styles.project}>
      <div className={styles.projectInfo}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {project.client} {project.description}
          </h1>
          <span className={styles.border} />
          <p className={styles.description}>{project.largeDescription}</p>
        </div>
        <div className={styles.box}>
          <p className={styles.clientTitle}>CLIENTE:</p>
          <p className={styles.client}>{project.client}</p>
          <p className={styles.projectTitle}>PROYECTO:</p>
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
