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
    description:
      "Building responsive interfaces with modern React and strong web fundamentals.",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "ui-styling",
    title: "UI & Styling",
    description:
      "Creating clean layouts, reusable visual patterns, and responsive designs.",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
      "CSS Grid",
      "Flexbox",
    ],
  },
  {
    id: "react-ecosystem",
    title: "React Ecosystem",
    description:
      "Structuring React apps with routing, reusable components, and client-side data.",
    skills: [
      "React Router",
      "Component Architecture",
      "State Management",
      "REST APIs",
      "Local Storage",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description:
      "Working with the tools needed to build, version, and deploy front-end projects.",
    skills: ["Vite", "Git", "GitHub", "Vercel", "Figma"],
  },
];
