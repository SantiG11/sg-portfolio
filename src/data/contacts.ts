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
    hint: "Professional profile",
    value: "https://www.linkedin.com/in/santiago-l-gomez/",
    icon: "linkedin",
    interactionType: "link",
    actionLabel: "Open",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    hint: "Projects and source code",
    value: "https://github.com/SantiG11",
    icon: "github",
    interactionType: "link",
    actionLabel: "Open",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    hint: "Reach me by email",
    value: "santigomez1129@gmail.com",
    icon: "email",
    interactionType: "email-copy",
    actionLabel: "Copy",
  },
  {
    id: "cv",
    label: "CV",
    hint: "Open my resume",
    value: "/Santiago_Gomez_CV.pdf",
    icon: "cv",
    interactionType: "link",
    actionLabel: "Open",
    external: true,
  },
];
