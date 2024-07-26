import projects from "@/mocks/projects.json";

import { getCldImageUrl } from "next-cloudinary";
import { getTranslations } from "@/utils/getTranslations";
import MediaProject from "@/components/MediaProject/MediaProject";
import ProjectLayout from "@/components/layout/ProjectLayout/ProjectLayout";

export async function generateMetadata({ params }) {
  const t = await getTranslations(params.locale, "Projects");
  const project = projects[params.project];

  return {
    title: t[params.project].titleMetaData,
    description: t[params.project].descriptionMetaData,
    keywords: t[params.project].seoKeywords,
    alternates: {
      canonical: `${params.locale}/proyectos/${params.project}`,
      languages: {
        en: `/en/proyectos/${params.project}`,
        es: `/es/proyectos/${params.project}`,
        ca: `/ca/proyectos/${params.project}`,
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

export default async function Project({ params }) {
  const project = projects[params.project];

  return (
    <ProjectLayout projectName={params.project} locale={params.locale}>
      <MediaProject project={project} />
    </ProjectLayout>
  );
}
