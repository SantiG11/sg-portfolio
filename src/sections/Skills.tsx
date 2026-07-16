import Section from "../components/Section";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Core tools and strengths that power my builds."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="break-words text-lg font-semibold text-white">
              {group.title}
            </h3>
            {group.description && (
              <p className="mt-2 break-words text-sm text-zinc-400">
                {group.description}
              </p>
            )}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="max-w-full break-words rounded-full border border-white/10 bg-[#05070a] px-3 py-1 text-xs text-zinc-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
