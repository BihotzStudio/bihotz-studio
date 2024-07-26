import projects from "@/mocks/projects.json";

import { ProjectHeader } from "@/components/ProjectHeader/ProjectHeader";

import styles from "./ProjectLayout.css";

export default async function ProjectLayout({ children, projectName, locale }) {
  const project = projects[projectName];

  return (
    <div className={styles.project}>
      <ProjectHeader
        project={project}
        projectName={projectName}
        locale={locale}
      />
      {children}
    </div>
  );
}
