import Section from "../components/Section";

const projects = [
  {
    title: "Client Onboarding Flow",
    description:
      "A multi-step onboarding experience with clear progress, inline validation, and warm microcopy.",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "Product UX",
    href: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data-dense layout with adaptable cards, quick filters, and a responsive grid system.",
    tags: ["React", "TypeScript", "UI Systems"],
    category: "Web App",
    href: "#",
  },
  {
    title: "Marketing Site Refresh",
    description:
      "High-converting landing layout with bold typography, smooth section flow, and CTA clarity.",
    tags: ["Design", "Performance", "Vite"],
    category: "Landing Page",
    href: "#",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few selected builds that highlight my front-end range and attention to detail."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.href}
            className={`group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/10 ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-400">
              <span>{project.category}</span>
              {project.featured && (
                <span className="text-emerald-300/80">Featured</span>
              )}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-zinc-300">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-[#05070a] px-3 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-300">
              View details
              <span className="transition group-hover:translate-x-1">-&gt;</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
