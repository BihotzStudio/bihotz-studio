"use client";

import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";
import { getCldImageUrl } from "next-cloudinary";

import { Video } from "@/components/Video/Video";
import useDevice from "@/hooks/useDevice";

import styles from "./MediaProject.module.css";

const MediaProject = ({ project }) => {
  const { device } = useDevice();

  const mediaDevice = project.mediaDetails[device] ? device : "desktop";

  return project.mediaDetails[mediaDevice].map((media, index) => (
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
  ));
};

export default MediaProject;
