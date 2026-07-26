import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section
      id="projects"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
