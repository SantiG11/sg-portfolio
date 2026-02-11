import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const projects = [
  {
    name: "Client Onboarding Flow",
    websiteUrl: "https://example.com/onboarding-flow",
    githubUrl: "https://github.com/example/onboarding-flow",
    description:
      "A multi-step onboarding experience with clear progress, inline validation, and warm microcopy.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Figma"],
  },
  {
    name: "Analytics Dashboard",
    websiteUrl: "https://example.com/analytics-dashboard",
    githubUrl: "https://github.com/example/analytics-dashboard",
    description:
      "A data-focused dashboard with reusable cards, filter controls, and responsive chart sections.",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "Git"],
  },
  {
    name: "Marketing Site Refresh",
    websiteUrl: "https://example.com/marketing-refresh",
    githubUrl: "https://github.com/example/marketing-refresh",
    description:
      "A modern marketing site redesign focused on content hierarchy, performance, and conversion-friendly CTAs.",
    technologies: ["React", "Tailwind CSS", "Vite", "Figma", "GitHub"],
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Mock project cards with consistent image space and complete project metadata."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </Section>
  );
}
