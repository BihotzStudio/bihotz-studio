import { getCldImageUrl } from "next-cloudinary";

import ProjectLayout from "@/components/layout/ProjectLayout/ProjectLayout";
import projects from "@/mocks/projects.json";

import { getTranslations } from "@/utils/getTranslations";

import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { CloudinaryImage } from "@/components/CloudinaryImage/CloudinaryImage";

import styles from "./brownie-workshop.module.css";

const PROJECT_NAME = "brownie-workshop";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Projects");
  const project = projects[PROJECT_NAME];

  return {
    title: t[PROJECT_NAME].titleMetaData,
    description: t[PROJECT_NAME].descriptionMetaData,
    keywords: t[PROJECT_NAME].seoKeywords,
    alternates: {
      canonical: `${params.locale}/proyectos/${PROJECT_NAME}`,
      languages: {
        en: `/en/proyectos/${PROJECT_NAME}`,
        es: `/es/proyectos/${PROJECT_NAME}`,
        ca: `/ca/proyectos/${PROJECT_NAME}`,
      },
    },
    openGraph: {
      images: getCldImageUrl({
        src:
          project.mediaCover.desktop[0].type === "video"
            ? project.mediaCover.desktop[0].coverId
            : project.mediaCover.desktop[0].id,
        width: project.mediaCover.desktop[0].width,
        height: project.mediaCover.desktop[0].height,
      }),
    },
  };
}

export default async function BrownieWorkshop({ params }) {
  const t = await getTranslations(params.locale, "Projects");

  return (
    <ProjectLayout projectName={PROJECT_NAME} locale={params.locale}>
      <div className={`${styles.section} ${styles.sectionBackground}`}>
        <section className={styles.card}>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <h2 className={styles.cardTitle}>Warm up</h2>
          </BorderAnimation>
          <div className={styles.cardContainer}>
            <CloudinaryImage
              priority
              media={{
                height: "1800",
                width: "2880",
                altImage:
                  "Diseño del proyecto del sistema de diseño de Brownie",
                id: "Workshop_01_01",
              }}
              className={styles.cardImage}
              sizes="100vw"
            />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                El workshop comenzó con una sesión de calentamiento diseñada
                para romper el hielo y fomentar un ambiente colaborativo.
              </p>
              <p className={styles.cardText}>
                Participamos en las siguientes actividades:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.textCardSquare} />
                  Presentaciones
                </li>
                <li className={styles.listItem}>
                  <span className={styles.textCardSquare} />
                  Actividades para romper el hielo
                </li>
                <li className={styles.listItem}>
                  <span className={styles.textCardSquare} />
                  Cuestionario breve
                </li>
                <li className={styles.listItem}>
                  <span className={styles.textCardSquare} />
                  Objetivos del workshop
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.reverseCard}>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <h2 className={styles.cardTitle}>User Persona</h2>
          </BorderAnimation>
          <div className={styles.cardContainer}>
            <CloudinaryImage
              priority
              media={{
                height: "1800",
                width: "2880",
                altImage:
                  "Diseño del proyecto del sistema de diseño de Brownie",
                id: "Workshop_01_02",
              }}
              className={styles.cardImage}
              sizes="100vw"
            />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                La creación de User Personas fue un proceso meticuloso e
                iterativo destinado a desarrollar perfiles detallados que
                representan diferentes segmentos de la audiencia objetivo. Este
                enfoque aseguró que en el posterior diseño de la APP tuviéramos
                en cuenta eficazmente diversas necesidades de los usuarios y que
                nuestros esfuerzos estuvieran fundamentados en un profundo
                entendimiento de la audiencia objetivo.
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.textCardSquare} />
                  Brainstorming
                </li>
                <li className={styles.listItem}>
                  <span className={styles.textCardSquare} />
                  Persona Creation
                </li>
                <li className={styles.listItem}>
                  <span className={styles.textCardSquare} />
                  Discusión y Refinamiento
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.section}>
        <section className={styles.card}>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <h2 className={styles.cardTitle}>User Journey</h2>
          </BorderAnimation>
          <div className={styles.cardContainer}>
            <CloudinaryImage
              priority
              media={{
                height: "1800",
                width: "2880",
                altImage:
                  "Diseño del proyecto del sistema de diseño de Brownie",
                id: "Workshop_02_01",
              }}
              className={styles.cardImage}
              sizes="100vw"
            />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                Con los perfiles de clientes de nuestro ejercicio anterior en
                mente, trazamos el recorrido que cada perfil seguiría al
                enfrentarse a una tarea específica.
              </p>
              <p className={styles.cardText}>
                Este proceso implicó imaginar y detallar los pasos e
                interacciones que estos clientes probablemente experimentarían,
                desde su primer contacto con la tarea hasta su finalización.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.reverseCard}>
          <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
            <h2 className={styles.cardTitle}>Swot Analysis</h2>
          </BorderAnimation>
          <div className={styles.cardContainer}>
            <CloudinaryImage
              priority
              media={{
                height: "1800",
                width: "2880",
                altImage:
                  "Diseño del proyecto del sistema de diseño de Brownie",
                id: "Workshop_03",
              }}
              className={styles.cardImage}
              sizes="100vw"
            />
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                Llevamos a cabo un análisis detallado SWOT para evaluar los
                factores internos y externos que afectan el desarrollo y
                lanzamiento de la aplicación. Esta evaluación nos ayudó a
                comprender mejor nuestra posición estratégica, permitiéndonos
                aprovechar nuestras fortalezas, abordar nuestras debilidades,
                aprovechar oportunidades y gestionar amenazas de manera efectiva
                en nuestras fases de planificación e implementación.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className={`${styles.card} ${styles.fullWidthCard}`}>
        <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
          <h2 className={styles.cardTitle}>Conceptualización del MVP</h2>
        </BorderAnimation>
        <div className={styles.cardContainer}>
          <CloudinaryImage
            priority
            media={{
              height: "1800",
              width: "2880",
              altImage: "Diseño del proyecto del sistema de diseño de Brownie",
              id: "Workshop_04",
            }}
            className={styles.cardImage}
            sizes="100vw"
          />
          <div className={styles.cardContent}>
            <p className={styles.cardText}>
              Mediante una serie de ejercicios estructurados y sesiones de
              brainstorming, determinamos qué características consideramos
              esenciales para hacer que la aplicación de Brownie sea
              excepcional. Estas características fueron evaluadas cuidadosamente
              y se colocaron en un diagrama para priorizarlas según su relación
              costo/beneficio. Este enfoque nos permite centrarnos en
              implementar las características de alto impacto primero,
              optimizando la asignación de recursos y maximizando el valor de la
              aplicación para los usuarios.
            </p>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.textCardSquare} />
                Identificar funcionalidades esenciales para la excelencia de la
                aplicación Brownie.
              </li>
              <li className={styles.listItem}>
                <span className={styles.textCardSquare} />
                Evaluar las funcionalidades según su costo-efectividad.
              </li>
              <li className={styles.listItem}>
                <span className={styles.textCardSquare} />
                Priorización de funcionalidades para implementación estratégica.
              </li>
              <li className={styles.listItem}>
                <span className={styles.textCardSquare} />
                Con el objetivo de maximizar el valor para el usuario.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>{t[PROJECT_NAME].footer}</p>
      </footer>
    </ProjectLayout>
  );
}
