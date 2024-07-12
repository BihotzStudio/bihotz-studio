import Link from "next/link";
import { BorderAnimation } from "../../../components/BorderAnimation/BorderAnimation";

import styles from "./proyectos.module.css";

import projects from "@/mocks/projects.json";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";
import { getCldImageUrl } from "next-cloudinary";
import { Video } from "@/components/Video/Video";
import { isBot } from "@/utils/isBot";
import { getTranslations } from "@/utils/getTranslations";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Projects");

  return {
    title: t.titleMetaData,
    description: t.descriptionMetaData,
    alternates: {
      canonical: `${params.locale}/proyectos`,
      languages: {
        en: "/en/proyectos",
        es: "/es/proyectos",
        ca: "/ca/proyectos",
      },
    },
  };
}

export default function Proyecto({ params }) {
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
          <Link href={`/${params.locale}/proyectos/${name}`}>
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
                    isBot={isBot()}
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
                  <p className={styles.client}>{project.client}</p>
                  <p className={styles.type}>{project.creativeFields}</p>
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
