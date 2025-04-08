import { getTranslations } from "@/utils/getTranslations";
import Projects from "@/components/Projects/Projects";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations(locale, "Projects");

  return {
    title: t.titleMetaData,
    description: t.descriptionMetaData,
    alternates: {
      canonical: `${locale}/proyectos`,
      languages: {
        en: "/en/proyectos",
        es: "/es/proyectos",
        ca: "/ca/proyectos",
      },
    },
  };
}

export default async function Proyectos({ params }) {
  const { locale } = await params;

  return <Projects locale={locale} />;
}
