import Link from "next/link";
import { BorderAnimation } from "../../../components/BorderAnimation/BorderAnimation";

import styles from "./proyectos.module.css";

import projects from "@/mocks/projects.json";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";
import { getCldImageUrl } from "next-cloudinary";
import { Video } from "@/components/Video/Video";
import { isBot } from "@/utils/isBot";

export default function Proyecto({ params }) {
  return (
    <div className={styles.projects}>
      {Object.entries(projects).map(([name, project], index) => (
        <BorderAnimation
          key={name}
          className={styles.container}
          bottom={{ className: styles.bottomBorder }}
          right={{ className: styles.rightBorder }}
        >
          <Link href={`/${params.locale}/proyectos/${name}`}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                {project.mediaCover[0].type === "video" ? (
                  <Video
                    key={project.url}
                    url={project.mediaCover[0].url}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.image}
                    muted
                    playsInline
                    poster={getCldImageUrl({
                      src: project.mediaCover[0].coverId,
                      width: project.mediaCover[0].width,
                      height: project.mediaCover[0].height,
                    })}
                    isBot={isBot()}
                  />
                ) : (
                  <CloudinaryImage
                    priority={index < 3}
                    media={project.mediaCover[0]}
                    className={styles.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.infoTitle}>
                  <p className={styles.client}>{project.client}</p>
                  <p className={styles.type}>{project.projectType}</p>
                </div>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          </Link>
        </BorderAnimation>
      ))}
    </div>
  );
}
