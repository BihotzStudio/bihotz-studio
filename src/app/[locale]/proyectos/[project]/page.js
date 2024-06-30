import projects from "@/mocks/projects.json";

import styles from "./project.module.css";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";
import { isBot } from "@/utils/isBot";

export default function Project({ params }) {
  const project = projects[params.project];

  return (
    <div className={styles.project}>
      {project.project.map((media, index) => (
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
              priority={index < 2}
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
