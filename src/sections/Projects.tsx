import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work with consistent image space and complete project metadata."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
