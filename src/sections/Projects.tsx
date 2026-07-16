import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected React projects focused on responsive interfaces, data organization, and interactive user flows."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
