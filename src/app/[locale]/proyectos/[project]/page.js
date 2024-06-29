import Image from "next/image";

import projects from "@/mocks/projects.json";

import styles from "./project.module.css";
import { isBot } from "@/utils/isBot";

export default function Project({ params }) {
  const project = projects[params.project];

  return (
    <div className={styles.project}>
      {project.project.map((image, index) =>
        image.media.type === "video" ? (
          <video
            key={image.url}
            style={{ width: "100%", height: "auto" }}
            className={styles.image}
            autoPlay={!isBot()}
            loop
            muted
            preload="none"
            playsInline
          >
            <source
              src={`/images/projects/${params.project}/${image.url}.${image.media.format}`}
              type={`video/${image.media.format}`}
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div key={image.url} className={styles.imageContainer}>
            <Image
              priority={index < 2}
              alt={image.altImage}
              src={`/images/projects/${params.project}/${image.url}.${image.media.format}`}
              width={2880}
              height={1116}
              quality={75}
              className={styles.image}
              sizes="100vw"
            />
          </div>
        )
      )}
    </div>
  );
}
