export type SkillGroup = {
  id: string;
  title: string;
  description?: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "front-end",
    title: "Front-end",
    description: "Building polished interfaces with component-driven workflows.",
    skills: ["React", "TypeScript", "Tailwind", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Shipping efficiently with clean handoffs and tidy repos.",
    skills: ["Vite", "Git", "GitHub", "Figma"],
  },
];
