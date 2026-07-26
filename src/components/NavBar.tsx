import { useLanguage } from "../i18n/LanguageProvider";

export default function NavBar() {
  const { t, lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07090c]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2.5 sm:px-6 sm:py-3 lg:flex-nowrap lg:gap-5 lg:py-4">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 rounded-xl px-1 py-1 text-white transition hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090c] sm:px-2 sm:py-1.5"
          aria-label="Go to top"
        >
          <img
            src="/favicon.svg"
            alt=""
            aria-hidden="true"
            className="h-8 w-8 shrink-0 rounded-xl"
          />
          <span className="hidden text-base font-semibold tracking-tight sm:inline lg:text-lg">
            {t.nav.name}
          </span>
        </a>

        <div className="order-3 flex w-full min-w-0 items-center justify-between gap-1 border-t border-white/[0.06] pt-2 lg:order-none lg:ml-auto lg:w-auto lg:justify-start lg:gap-5 lg:border-0 lg:pt-0">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-lg px-1.5 py-1.5 text-xs font-semibold text-zinc-300 transition hover:bg-white/[0.06] hover:text-white focus:bg-white/[0.08] focus:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/70 sm:px-3 sm:text-sm lg:px-2.5"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto inline-flex shrink-0 items-center gap-0.5 rounded-lg border border-white/10 bg-white/[0.04] p-0.5 lg:ml-0 lg:gap-2 lg:border-0 lg:bg-transparent lg:p-0">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`rounded-md px-2 py-1 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-300/70 ${
              lang === "en"
                ? "bg-emerald-400 text-zinc-900"
                : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
            }`}
            aria-pressed={lang === "en"}
          >
            {t.nav.langToggle.en}
          </button>
          <button
            type="button"
            onClick={() => setLang("es")}
            className={`rounded-md px-2 py-1 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-300/70 ${
              lang === "es"
                ? "bg-emerald-400 text-zinc-900"
                : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
            }`}
            aria-pressed={lang === "es"}
          >
            {t.nav.langToggle.es}
          </button>
        </div>
      </nav>
    </header>
  );
}
