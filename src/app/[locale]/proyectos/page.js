import Image from "next/image";
import Link from "next/link";
import { BorderAnimation } from "../../../components/BorderAnimation/BorderAnimation";

import styles from "./proyectos.module.css";
import { isBot } from "@/utils/isBot";

import projects from "@/mocks/projects.json";

export default function Proyecto({ params }) {
  return (
    <div className={styles.projects}>
      {Object.entries(projects).map(([name, project]) => (
        <BorderAnimation
          key={name}
          className={styles.container}
          bottom={{ className: styles.bottomBorder }}
          right={{ className: styles.rightBorder }}
        >
          <Link href={`/${params.locale}/proyectos/${name}`}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                {project.media.type === "video" ? (
                  <video
                    style={{ width: "100%", height: "auto" }}
                    className={styles.image}
                    autoPlay={!isBot()}
                    loop
                    muted
                  >
                    <source
                      src={`/images/projects/${name}/portada.${project.media.format}`}
                      type={`video/${project.media.format}`}
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    alt={project.altImage}
                    src={`/images/projects/${name}/portada.${project.media.format}`}
                    width={2879}
                    height={1620}
                    quality={75}
                    className={styles.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.infoTitle}>
                  <p className={styles.client}>{project.client}</p>
                  <p className={styles.type}>{project.type}</p>
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
