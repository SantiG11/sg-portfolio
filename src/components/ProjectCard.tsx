type ProjectCardProps = {
  name: string;
  websiteUrl: string;
  githubUrl: string;
  description: string;
  technologies: string[];
};

function isExternalLink(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export default function ProjectCard({
  name,
  websiteUrl,
  githubUrl,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="w-full rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">{name}</h3>

      <div className="mt-4">
        <div
          aria-label={`${name} image placeholder`}
          className="aspect-[16/9] w-full rounded-xl border border-white/10 bg-black"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={websiteUrl}
          target={isExternalLink(websiteUrl) ? "_blank" : undefined}
          rel={isExternalLink(websiteUrl) ? "noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/30 px-3 py-1.5 text-sm font-medium text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a15 15 0 0 1 0 18" />
            <path d="M12 3a15 15 0 0 0 0 18" />
          </svg>
          Website
        </a>
        <a
          href={githubUrl}
          target={isExternalLink(githubUrl) ? "_blank" : undefined}
          rel={isExternalLink(githubUrl) ? "noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-zinc-200 transition hover:border-white/40 hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4a3.2 3.2 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2 2.6 2.6 0 0 0 3.5 1 2.6 2.6 0 0 1 .8-1.6c-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.5 1 .5 2.2.1 3.2a4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6a2.9 2.9 0 0 1 .8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
          </svg>
          GitHub
        </a>
      </div>

      <p className="mt-4 text-sm text-zinc-300">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {technologies.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-[#05070a] px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
