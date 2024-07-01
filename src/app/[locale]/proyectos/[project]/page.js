import projects from "@/mocks/projects.json";

import styles from "./project.module.css";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";
import { isBot } from "@/utils/isBot";

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
            <video
              key={media.url}
              style={{ width: "100%", height: "auto" }}
              className={styles.image}
              autoPlay={!isBot()}
              loop
              muted
              preload="none"
              playsInline
            >
              <source src={media.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
