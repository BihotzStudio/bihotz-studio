"use client";
import { useEffect, useRef, useState } from "react";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

import styles from "./Video.module.css";

export function Video({
  url,
  poster,
  style,
  className,
  muted,
  playsInline,
  controls = false,
  isBot = false,
}) {
  const reducedMotion = useReducedMotion();
  const [isPausedByUser, setIsPausedByUser] = useState(reducedMotion);

  const videoRef = useRef(null);
  const iconRef = useRef(null);

  const entry = useIntersectionObserver(videoRef, {
    threshold: 0.2,
  });

  useEffect(() => {
    setIsPausedByUser(reducedMotion);
  }, [reducedMotion]);

  const toggle = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
    setIsPausedByUser((prev) => !prev);
  };

  const onEnded = () => {
    videoRef.current?.play();
  };

  const onButtonAnimationEnd = (e) => {
    iconRef.current?.classList.remove(styles.fadeout);

    if (e.animationName === styles["fade-out"]) {
      toggle();
      iconRef.current?.classList.add(styles.fadein);
    }
  };

  const addFadeOut = () => {
    iconRef.current?.classList.remove(styles.fadein);
    iconRef.current?.classList.add(styles.fadeout);
  };

  useEffect(() => {
    if (videoRef.current) {
      if (entry?.isIntersecting && !isPausedByUser && !isBot) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    }
  }, [entry?.isIntersecting, isBot, isPausedByUser]);

  return (
    <div className={styles.video}>
      <video
        src={url}
        onEnded={onEnded}
        className={`${styles.videoTag} ${className}`}
        ref={videoRef}
        muted={muted}
        playsInline={playsInline}
        style={style}
        poster={poster}
      >
        <source src={url} type="video/mp4" />
        <track kind="captions" />
      </video>
      {controls && (
        <div className={styles.buttonWrapper}>
          <button onClick={addFadeOut} type="button" className={styles.button}>
            <div ref={iconRef} onAnimationEnd={onButtonAnimationEnd}>
              <p
                width={24}
                height={24}
                className={isPausedByUser ? styles.show : styles.hide}
              >
                play
              </p>
              <p
                width={24}
                height={24}
                className={isPausedByUser ? styles.hide : styles.show}
              >
                Pause
              </p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
