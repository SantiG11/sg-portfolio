import Section from "../components/Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Core tools and strengths that power my builds."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Front-end</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Building polished interfaces with component-driven workflows.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind", "HTML", "CSS", "JavaScript"].map(
              (s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-[#05070a] px-3 py-1 text-xs text-zinc-200"
                >
                  {s}
                </span>
              )
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Tools</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Shipping efficiently with clean handoffs and tidy repos.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Vite", "Git", "GitHub", "Figma"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-[#05070a] px-3 py-1 text-xs text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
