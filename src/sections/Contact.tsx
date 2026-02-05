import Section from "../components/Section";

const links = [
  { label: "LinkedIn", hint: "Fastest response", href: "#" },
  { label: "GitHub", hint: "Code and repositories", href: "#" },
  {
    label: "Email",
    hint: "For opportunities",
    href: "mailto:your@email.com",
  },
  { label: "CV (PDF)", hint: "Download resume", href: "#" },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact / Links"
      subtitle="Best places to reach me and see more of my work."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-white">
                {item.label}
              </span>
              <span className="text-xs text-zinc-400">{item.hint}</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
              Open link
              <span className="transition group-hover:translate-x-1">-&gt;</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
