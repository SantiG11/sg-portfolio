export default function Hero() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Front-End Developer
          </div>

          <h1 className="fade-up fade-up-delay-1 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            I build responsive <span className="text-emerald-300">React apps</span>
            with clean UI and dependable logic.
          </h1>

          <p className="fade-up fade-up-delay-2 max-w-2xl text-lg text-zinc-300">
            React + TypeScript + Tailwind. Focused on scalable components,
            delightful UX, and production-ready performance.
          </p>

          <div className="fade-up fade-up-delay-3 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-emerald-400 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-emerald-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Contact / Links
            </a>
          </div>

          <div className="fade-up fade-up-delay-3 flex flex-wrap gap-2 pt-2">
            {["React", "TypeScript", "Tailwind", "Vite"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="fade-up fade-up-delay-2 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              What I Focus On
            </p>
            <p className="mt-3 text-lg text-zinc-100">
              Thoughtful interfaces that feel fast, intentional, and easy to
              trust.
            </p>
          </div>

          <div className="space-y-3 text-sm text-zinc-300">
            {[
              "Design systems and UI consistency",
              "Performance-minded React architecture",
              "Collaborative, maintainable codebases",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-[#05070a] px-4 py-3 text-xs text-zinc-400">
            <span className="mono text-emerald-300">stack</span> React -
            TypeScript - Tailwind - Vite
          </div>
        </div>
      </div>
    </section>
  );
}
