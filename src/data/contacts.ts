export type ContactIconId = "linkedin" | "github" | "email" | "cv";

export type ContactInteractionType = "link" | "email-copy";

export type ContactMethod = {
  id: string;
  label: string;
  hint: string;
  value: string;
  icon: ContactIconId;
  interactionType: ContactInteractionType;
  actionLabel?: string;
  disabled?: boolean;
  external?: boolean;
};

export const contactMethods: ContactMethod[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    hint: "Fastest response",
    value: "https://www.linkedin.com/in/santiago-l-gomez/",
    icon: "linkedin",
    interactionType: "link",
    actionLabel: "Open",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    hint: "Code and repositories",
    value: "https://github.com/SantiG11",
    icon: "github",
    interactionType: "link",
    actionLabel: "Open",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    hint: "For opportunities",
    value: "santigomez1129@gmail.com",
    icon: "email",
    interactionType: "email-copy",
    actionLabel: "Copy",
  },
  {
    id: "cv",
    label: "CV (PDF)",
    hint: "Resume coming soon",
    value: "#",
    icon: "cv",
    interactionType: "link",
    actionLabel: "Soon",
    disabled: true,
  },
];
