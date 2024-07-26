import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";
import { getTranslations } from "@/utils/getTranslations";

import styles from "./ProjectHeader.module.css";

export async function ProjectHeader({ project, locale, projectName }) {
  const t = await getTranslations(locale, "Projects");

  return (
    <div className={styles.projectInfo}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {project.client} {project.description}
        </h1>
        <BorderAnimation className={styles.border} bottom={{ reverse: true }}>
          <span className={styles.border} />
        </BorderAnimation>
        <p className={styles.description}>{t[projectName].description}</p>
      </div>

      <BorderAnimation
        className={styles.box}
        bottom={{ reverse: true }}
        top={{ reverse: true }}
        left
        right
      >
        <p className={styles.clientTitle}>{t.client}:</p>
        <a href={project.clientWebsite} target="_blank" rel="noopener">
          <p className={styles.client}>{project.client}</p>
        </a>
        <p className={styles.projectTitle}>{t.project}:</p>
        <p className={styles.project}>{project.name}</p>
        <p className={styles.creativeFieldsTitle}>CREATIVE FIELDS:</p>
        <p className={styles.creativeField}>{project.creativeFields}</p>
      </BorderAnimation>
    </div>
  );
}
