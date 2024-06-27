import Image from "next/image";
import { BorderAnimation } from "../../../components/BorderAnimation/BorderAnimation";

import styles from "./proyectos.module.css";

export const metadata = {
  title: "Proyectos - Bihotz Studio",
  description: "",
};

export default function Proyecto() {
  return (
    <div className={styles.projects}>
      <BorderAnimation
        className={styles.container}
        bottom={{ className: styles.bottomBorder }}
        right={{ className: styles.rightBorder }}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              alt=""
              src="/images/projects/pronovias-fashion-show/portada.gif"
              width={2879}
              height={1620}
              quality={100}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <p className={styles.client}>Pronovias</p>
              <p className={styles.type}>Diseño UI</p>
            </div>
            <p className={styles.description}>
              Diseño para el microsite del Fashion Show 2024
            </p>
          </div>
        </div>
      </BorderAnimation>
      <BorderAnimation
        className={styles.container}
        bottom={{ className: styles.bottomBorder }}
        right={{ className: styles.rightBorder }}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              alt=""
              src="/images/projects/brownie-ds/portada.jpg"
              width={2879}
              height={1620}
              quality={100}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <p className={styles.client}>Brownie</p>
              <p className={styles.type}>Diseño UX/UI</p>
            </div>
            <p className={styles.description}>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </BorderAnimation>
      <BorderAnimation
        className={styles.container}
        bottom={{ className: styles.bottomBorder }}
        right={{ className: styles.rightBorder }}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              alt=""
              src="/images/projects/brownie-workshop/portada.jpg"
              width={2879}
              height={1620}
              quality={100}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <p className={styles.client}>Brownie</p>
              <p className={styles.type}>Diseño UX/UI</p>
            </div>
            <p className={styles.description}>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </BorderAnimation>
      <BorderAnimation
        className={styles.container}
        bottom={{ className: styles.bottomBorder }}
        right={{ className: styles.rightBorder }}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              alt=""
              src="/images/projects/nicole/portada.jpg"
              width={2879}
              height={1620}
              quality={100}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <p className={styles.client}>Nicole</p>
              <p className={styles.type}>Diseño UX/UI</p>
            </div>
            <p className={styles.description}>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </BorderAnimation>
      <BorderAnimation
        className={styles.container}
        bottom={{ className: styles.bottomBorder }}
        right={{ className: styles.rightBorder }}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              alt=""
              src="/images/projects/suly/portada.jpg"
              width={2879}
              height={1620}
              quality={100}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <p className={styles.client}>Suly</p>
              <p className={styles.type}>Diseño UX/UI</p>
            </div>
            <p className={styles.description}>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </BorderAnimation>
      <BorderAnimation
        className={styles.container}
        bottom={{ className: styles.bottomBorder }}
        right={{ className: styles.rightBorder }}
      >
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <video
              style={{ width: "100%", height: "auto" }}
              preload="none"
              className={styles.image}
              autoPlay
              loop
            >
              <source
                src="/images/projects/five-of-us-web/portada.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <p className={styles.client}>Five of us</p>
              <p className={styles.type}>Diseño UX/UI</p>
            </div>
            <p className={styles.description}>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </BorderAnimation>
    </div>
  );
}
