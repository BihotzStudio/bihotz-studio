"use client";

import { CldImage } from "next-cloudinary";

import projects from "@/mocks/projects.json";

import styles from "./project.module.css";

export default function Project({ params }) {
  const project = projects[params.project];

  return (
    <div className={styles.project}>
      {project.project.map((media, index) =>
        media.type === "video" ? (
          <div key={media.id} className={styles.imageContainer}>
            <video
              key={media.url}
              style={{ width: "100%", height: "auto" }}
              className={styles.image}
              autoPlay
              loop
              muted
              preload="none"
              playsInline
            >
              <source src={media.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div key={media.id} className={styles.imageContainer}>
            <CldImage
              priority={index < 2}
              alt={media.altImage}
              src={media.id}
              width={media.width}
              height={media.height}
              quality={100}
              className={styles.image}
              sizes="100vw"
            />
          </div>
        )
      )}
    </div>
  );
}
