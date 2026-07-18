const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07090c]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 rounded-xl px-2 py-1.5 text-white transition hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090c]"
          aria-label="Go to top"
        >
          <img
            src="/favicon.svg"
            alt=""
            aria-hidden="true"
            className="h-8 w-8 shrink-0 rounded-xl"
          />
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            <span className="hidden sm:inline">Santiago Gómez</span>
          </span>
        </a>
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-1.5 py-1.5 text-xs font-semibold text-zinc-300 transition hover:bg-white/[0.06] hover:text-white focus:bg-white/[0.08] focus:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/70 sm:px-2.5 sm:text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
