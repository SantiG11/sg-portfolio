import type { Project } from "../data/projects";

type ProjectCardProps = Pick<
  Project,
  | "name"
  | "websiteUrl"
  | "githubUrl"
  | "description"
  | "technologies"
  | "imageSrc"
  | "imageAlt"
  | "status"
>;

type ProjectLinkProps = {
  href: string;
  variant: "website" | "github";
  children: React.ReactNode;
};

const statusLabels: Record<NonNullable<Project["status"]>, string> = {
  live: "Live",
  "in-progress": "In progress",
  archived: "Archived",
  concept: "Concept",
};

function isExternalLink(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

function ProjectLink({ href, variant, children }: ProjectLinkProps) {
  const isWebsite = variant === "website";

  return (
    <a
      href={href}
      target={isExternalLink(href) ? "_blank" : undefined}
      rel={isExternalLink(href) ? "noreferrer" : undefined}
      className={`inline-flex min-w-0 items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
        isWebsite
          ? "border-emerald-300/30 text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
          : "border-white/20 text-zinc-200 hover:border-white/40 hover:text-white"
      }`}
    >
      {isWebsite ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4a3.2 3.2 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2 2.6 2.6 0 0 0 3.5 1 2.6 2.6 0 0 1 .8-1.6c-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.5 1 .5 2.2.1 3.2a4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6a2.9 2.9 0 0 1 .8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
        </svg>
      )}
      <span className="truncate">{children}</span>
    </a>
  );
}

export default function ProjectCard({
  name,
  websiteUrl,
  githubUrl,
  description,
  technologies,
  imageSrc,
  imageAlt,
  status,
}: ProjectCardProps) {
  return (
    <article className="w-full rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-start gap-2">
        <h3 className="min-w-0 flex-1 break-words text-xl font-semibold text-white">
          {name}
        </h3>
        {status && (
          <span className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">
            {statusLabels[status]}
          </span>
        )}
      </div>

      <div className="mt-4">
        {imageSrc ? (
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#05070a]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            aria-label={`${name} image placeholder`}
            className="aspect-[16/9] w-full rounded-xl border border-white/10 bg-[#05070a]"
          />
        )}
      </div>

      <div>
        {(websiteUrl || githubUrl) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {websiteUrl && (
              <ProjectLink href={websiteUrl} variant="website">
                Website
              </ProjectLink>
            )}
            {githubUrl && (
              <ProjectLink href={githubUrl} variant="github">
                GitHub
              </ProjectLink>
            )}
          </div>
        )}

        <p className="mt-4 break-words text-sm text-zinc-300">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies.map((item) => (
            <li
              key={item}
              className="max-w-full break-words rounded-full border border-white/10 bg-[#05070a] px-3 py-1 text-xs text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
