"use client";

import { CldImage } from "next-cloudinary";

export const CloudinaryImage = ({ priority, media, className, sizes }) => (
  <CldImage
    priority={priority}
    alt={media.altImage}
    src={media.id}
    width={media.width}
    height={media.height}
    quality={75}
    className={className}
    sizes={sizes}
    fill={media.fill}
    style={media.style}
  />
);
