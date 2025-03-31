import projects from "@/mocks/projects.json";
import languages from "@/mocks/languages.json";

export default async function sitemap() {
  return [
    ...getBaseEntries(),
    ...getServicesEntries(),
    ...getProjectsEntries(),
    ...getProjectEntries(),
  ];
}

const getBaseEntries = () => {
  return Object.entries(languages).map(([lang]) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}`,
    lastModified: new Date(),
    priority: 1,
  }));
};

const getServicesEntries = () => {
  return Object.entries(languages).map(([lang]) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/servicios`,
    lastModified: new Date(),
    priority: 0.9,
  }));
};

const getProjectsEntries = () => {
  return Object.entries(languages).map(([lang]) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/proyectos`,
    lastModified: new Date(),
    priority: 0.9,
  }));
};

const getProjectEntries = () => {
  let projectsEntries = [];

  Object.entries(languages).forEach(([lang]) =>
    Object.entries(projects).forEach(([name]) => {
      projectsEntries.push({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/proyectos/${name}`,
        changeFrequently: "weekly",
        lastModified: new Date(),
        priority: 0.8,
      });
    })
  );

  return projectsEntries.map((projectsEntry) => projectsEntry);
};
