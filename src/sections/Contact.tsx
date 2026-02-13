import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";

type ContactItem = {
  id: string;
  label: string;
  hint: string;
  value: string;
  icon: "linkedin" | "github" | "email" | "cv";
  type: "link" | "email-copy";
};

const contacts: ContactItem[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    hint: "Fastest response",
    value: "https://www.linkedin.com/in/santiago-l-gomez/",
    icon: "linkedin",
    type: "link",
  },
  {
    id: "github",
    label: "GitHub",
    hint: "Code and repositories",
    value: "https://github.com/SantiG11",
    icon: "github",
    type: "link",
  },
  {
    id: "email",
    label: "Email",
    hint: "For opportunities",
    value: "santigomez1129@gmail.com",
    icon: "email",
    type: "email-copy",
  },
  {
    id: "cv",
    label: "CV (PDF)",
    hint: "Download resume",
    value: "#",
    icon: "cv",
    type: "link",
  },
];

function ContactIcon({ icon }: { icon: ContactItem["icon"] }) {
  if (icon === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M6.94 8.5V19H3.5V8.5h3.44Zm.22-3.26a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20.5 13.04V19h-3.44v-5.43c0-1.37-.49-2.3-1.72-2.3-.94 0-1.5.63-1.75 1.24-.09.22-.11.54-.11.86V19H10.04s.05-9.23 0-10.5h3.44v1.49c.46-.71 1.28-1.72 3.1-1.72 2.26 0 3.92 1.47 3.92 4.77Z" />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4a3.2 3.2 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2 2.6 2.6 0 0 0 3.5 1 2.6 2.6 0 0 1 .8-1.6c-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.5 1 .5 2.2.1 3.2a4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6a2.9 2.9 0 0 1 .8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (icon === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M8 3h8l5 5v13H3V3h5Z" />
      <path d="M8 3v5h8" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
    </svg>
  );
}

export default function Contact() {
  const [copyFeedback, setCopyFeedback] = useState<"success" | "error" | null>(
    null,
  );
  const timeoutRef = useRef<number | null>(null);
  const cardBaseClass =
    "group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:cursor-pointer hover:border-emerald-300/40 hover:bg-white/[0.07]";
  const actionTextClass =
    "inline-flex w-16 shrink-0 justify-end text-sm font-medium text-emerald-200";

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function scheduleFeedbackReset(delayMs: number) {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopyFeedback(null);
      timeoutRef.current = null;
    }, delayMs);
  }

  async function handleCopyEmail(email: string) {
    try {
      await navigator.clipboard.writeText(email);
      setCopyFeedback("success");
      scheduleFeedbackReset(1800);
    } catch {
      setCopyFeedback("error");
      scheduleFeedbackReset(2400);
    }
  }

  return (
    <Section
      id="contact"
      title="Contact / Links"
      subtitle="Best places to reach me and see more of my work."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {contacts.map((item) => {
          const content = (
            <>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-zinc-200">
                    <ContactIcon icon={item.icon} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-2">
                      <p className="truncate text-base font-semibold text-white">
                        {item.label}
                      </p>
                      {item.type === "email-copy" && (
                        <span
                          aria-live="polite"
                          className={`pointer-events-none inline-flex items-center whitespace-nowrap rounded-full border text-[10px] font-medium transition-all duration-300 ${
                            copyFeedback
                              ? "max-w-40 translate-x-0 px-2 py-0.5 opacity-100"
                              : "max-w-0 -translate-x-2 px-0 py-0 opacity-0"
                          } ${
                            copyFeedback === "error"
                              ? "border-red-300/35 bg-red-500/20 text-red-100"
                              : "border-emerald-300/35 bg-emerald-500/20 text-emerald-100"
                          }`}
                        >
                          {copyFeedback === "error"
                            ? "Copy failed"
                            : "Email copied"}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400">{item.hint}</p>
                  </div>
                </div>
              </div>
              <span className={actionTextClass}>
                {item.type === "link" ? "Open" : "Copy"}
              </span>
            </>
          );

          if (item.type === "link") {
            return (
              <a
                key={item.id}
                href={item.value}
                target={item.value.startsWith("http") ? "_blank" : undefined}
                rel={item.value.startsWith("http") ? "noreferrer" : undefined}
                className={`${cardBaseClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50`}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleCopyEmail(item.value)}
              className={`${cardBaseClass} w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50`}
            >
              {content}
            </button>
          );
        })}
      </div>
    </Section>
  );
}
