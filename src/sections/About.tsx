import Section from "../components/Section";
import { useLanguage } from "../i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-3xl space-y-4 text-base text-zinc-300">
        {t.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
