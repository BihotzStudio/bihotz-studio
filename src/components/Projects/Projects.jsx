import Link from "next/link";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";

import styles from "./Projects.module.css";

import projects from "@/mocks/projects.json";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";
import { getCldImageUrl } from "next-cloudinary";
import { Video } from "@/components/Video/Video";
import { isBot } from "@/utils/isBot";

export default async function Projects({ locale }) {
  const isRobot = await isBot();

  return (
    <div className={styles.projects}>
      {Object.entries(projects).map(([name, project], index) => (
        <BorderAnimation
          key={name}
          className={styles.container}
          bottom={{
            className: styles.bottomBorder,
            reverse: index % 2 !== 0,
          }}
          right={{
            className: styles.rightBorder,
            reverse: index % 3 === 0,
          }}
        >
          <Link href={`/${locale}/proyectos/${name}`}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                {project.mediaCover.desktop[0].type === "video" ? (
                  <Video
                    key={project.url}
                    url={project.mediaCover.desktop[0].url}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.image}
                    muted
                    playsInline
                    poster={getCldImageUrl({
                      src: project.mediaCover.desktop[0].coverId,
                      width: project.mediaCover.desktop[0].width,
                      height: project.mediaCover.desktop[0].height,
                    })}
                    isBot={isRobot}
                  />
                ) : (
                  <CloudinaryImage
                    priority={index < 3}
                    media={project.mediaCover.desktop[0]}
                    className={styles.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.infoTitle}>
                  <h3 className={styles.client}>{project.client}</h3>
                  <p className={styles.type}>{project.creativeFields}</p>
                </div>
                <h2 className={styles.description}>{project.description}</h2>
              </div>
            </div>
          </Link>
        </BorderAnimation>
      ))}
    </div>
  );
}
