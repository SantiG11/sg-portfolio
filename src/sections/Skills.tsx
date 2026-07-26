import Section from "../components/Section";
import { skillGroups } from "../data/skills";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="break-words text-lg font-semibold text-white">
              {t.skills.groups[group.id as keyof typeof t.skills.groups]
                ?.title || group.title}
            </h3>
            {(t.skills.groups[group.id as keyof typeof t.skills.groups]
              ?.description ||
              group.description) && (
              <p className="mt-2 break-words text-sm text-zinc-400">
                {t.skills.groups[group.id as keyof typeof t.skills.groups]
                  ?.description || group.description}
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
