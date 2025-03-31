import projects from "@/mocks/projects.json";

import { getCldImageUrl } from "next-cloudinary";
import { getTranslations } from "@/utils/getTranslations";
import MediaProject from "@/components/MediaProject/MediaProject";
import ProjectLayout from "@/components/layout/ProjectLayout/ProjectLayout";

export async function generateMetadata({ params }) {
  const { locale, project } = await params;
  const t = await getTranslations(locale, "Projects");
  const projectData = projects[project];

  return {
    title: t[project].titleMetaData,
    description: t[project].descriptionMetaData,
    keywords: t[project].seoKeywords,
    alternates: {
      canonical: `${locale}/proyectos/${project}`,
      languages: {
        en: `/en/proyectos/${project}`,
        es: `/es/proyectos/${project}`,
        ca: `/ca/proyectos/${project}`,
      },
    },
    openGraph: {
      images: getCldImageUrl({
        src:
          projectData.mediaCover.desktop[0].type === "video"
            ? projectData.mediaCover.desktop[0].coverId
            : projectData.mediaCover.desktop[0].id,
        width: projectData.mediaCover.desktop[0].width,
        height: projectData.mediaCover.desktop[0].height,
      }),
    },
  };
}

export async function generateStaticParams() {
  const locales = ["es", "en", "ca"];

  const {
    "brownie-ds": _,
    "brownie-workshop": __,
    ...staticProjects
  } = projects;

  const params = locales.flatMap((locale) =>
    Object.entries(staticProjects).map((project) => ({
      locale,
      project: project[0],
    }))
  );

  return params;
}

export default async function Project({ params }) {
  const { locale, project } = await params;
  const projectData = projects[project];

  return (
    <ProjectLayout projectName={project} locale={locale}>
      <MediaProject project={projectData} />
    </ProjectLayout>
  );
}
