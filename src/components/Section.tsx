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
    <section id={id} className="scroll-mt-8 py-12 sm:py-16 lg:py-[4.5rem]">
      {(title || subtitle) && (
        <header className="mb-7 space-y-3 sm:mb-8">
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
      <div>{children}</div>
    </section>
  );
}
