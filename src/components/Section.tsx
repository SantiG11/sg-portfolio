type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-24">
      {(title || subtitle) && (
        <header className="fade-up mb-10 space-y-3">
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="max-w-2xl text-base text-zinc-400">{subtitle}</p>
          )}
        </header>
      )}
      <div className="fade-up fade-up-delay-1">{children}</div>
    </section>
  );
}
