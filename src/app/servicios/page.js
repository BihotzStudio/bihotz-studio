import Image from "next/image";

import styles from "./servicios.module.css";

export const metadata = {
  description: "",
};

export default function Servicios() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.containerInfo}>
          <p className={styles.number}>01.</p>
          <br />
          <p>Diseño UX/UI</p>
          <p className={styles.description}>
            Nuestro equipo de diseño se dedica a entender las necesidades y
            comportamientos de los usuarios para desarrollar interfaces
            intuitivas centradas en la usabilidad y la estética. Nos esforzamos
            por optimizar la interacción entre los usuarios y los productos
            digitales, brindando soluciones que no solo sean visualmente
            atractivas, sino también funcionales.
          </p>
        </div>
        <div className={styles.containerInfo}>
          <p className={styles.number}>02.</p>
          <br />
          <p>Desarrollo web y app.</p>
          <p className={styles.description}>
            Llevamos las ideas desde la concepción hasta la realidad digital.
            Nuestro equipo de desarrollo trabaja en estrecha colaboración con
            nuestros clientes para crear aplicaciones y páginas web a medida.
            Nos destacamos por la implementación de soluciones tecnológicas
            avanzadas escalables y seguras.
          </p>
        </div>
        <div className={styles.containerInfo}>
          <p className={styles.number}>03.</p>
          <br />
          <p>Branding Digital</p>
          <p className={styles.description}>
            Ofrecemos servicios de diseño enfocados en transmitir la esencia
            única de cada marca. Desde la creación de contenido para campañas
            publicitarias online hasta el diseño de elementos gráficos para
            redes sociales, banners y más.
          </p>
        </div>
        <div className={styles.containerInfo}>
          <p className={styles.number}>04.</p>
          <br />
          <p>Servicio Implant</p>
          <p className={styles.description}>
            Entendemos que la implementación exitosa de soluciones digitales va
            más allá de la entrega del producto final. Nos integramos
            directamente en la operativa diaria de nuestros clientes brindando
            asesoramiento y soporte continuo.
          </p>
        </div>
      </div>
      <div>
        <div className={styles.coverImage}>
          <Image
            alt=""
            src="/images/servicios.webp"
            fill
            priority
            className={styles.image}
            style={{ objectFit: "cover" }}
            sizes="30vw"
          />
        </div>
      </div>
    </div>
  );
}
