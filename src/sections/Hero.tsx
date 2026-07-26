import { useLanguage } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const [headingBeforeHighlight, headingAfterHighlight] = t.hero.heading.split(
    t.hero.headingHighlight,
  );

  return (
    <section className="relative py-14 sm:py-20 lg:py-24">
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div className="space-y-6">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.hero.roleBadge}
          </div>

          <h1 className="fade-up fade-up-delay-1 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {headingBeforeHighlight}
            <span className="text-emerald-300">
              {t.hero.headingHighlight}
            </span>
            {headingAfterHighlight}
          </h1>

          <p className="fade-up fade-up-delay-2 max-w-2xl text-lg text-zinc-300">
            {t.hero.intro}
          </p>

          <div className="fade-up fade-up-delay-3 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090c]"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090c]"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="fade-up fade-up-delay-2 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {t.hero.focusTitle}
            </p>
            <p className="mt-3 text-lg text-zinc-100">{t.hero.focusLead}</p>
          </div>

          <div className="space-y-3 text-sm text-zinc-300">
            {t.hero.focusList.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
