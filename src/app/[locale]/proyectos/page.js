import Link from "next/link";
import { BorderAnimation } from "../../../components/BorderAnimation/BorderAnimation";

import styles from "./proyectos.module.css";
import { isBot } from "@/utils/isBot";

import projects from "@/mocks/projects.json";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";

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
                  <video
                    key={project.url}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.image}
                    autoPlay={!isBot()}
                    loop
                    muted
                    preload="none"
                    playsInline
                  >
                    <source src={project.mediaCover[0].url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
