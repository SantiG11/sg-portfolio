const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07090c]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Santi
        </a>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
