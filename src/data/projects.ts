import blackjackScreen from "../assets/projects/Blackjack-Screenshot.png";
import formula1Screen from "../assets/projects/formula-1-two-omega.vercel.app_screenshot.png";
import wardrobeTrackerScreen from "../assets/projects/wardrobe-tracker-screen.webp";

export type ProjectStatus = "live" | "in-progress" | "archived" | "concept";

export type Project = {
  id: string;
  name: string;
  description: string;
  websiteUrl?: string;
  githubUrl?: string;
  technologies: string[];
  imageSrc?: string;
  imageAlt: string;
  featured?: boolean;
  status?: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: "wardrobe-tracker",
    name: "Wardrobe Tracker",
    websiteUrl: "https://wardrobe-tracker-one.vercel.app/",
    githubUrl: "https://github.com/SantiG11/wardrobe-tracker",
    description:
      "Wardrobe Tracker is a responsive React application for managing a personal wardrobe. It includes clothing and wishlist management, organized views, and a simple dashboard that gives users a quick overview of their collection and planned purchases.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "Local Storage",
    ],
    imageSrc: wardrobeTrackerScreen,
    imageAlt: "Wardrobe Tracker desktop screenshot",
  },
  {
    id: "formula-1",
    name: "Formula 1",
    websiteUrl: "https://formula-1-two-omega.vercel.app",
    githubUrl: "https://github.com/SantiG11/formula-1",
    description:
      "Formula 1 is a fan-made React application that displays current-season information in a clear and organized interface, including race results, standings, drivers, teams, circuits, and the race calendar.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "REST API",
    ],
    imageSrc: formula1Screen,
    imageAlt: "Formula 1 project desktop screenshot",
  },
  {
    id: "blackjack",
    name: "Blackjack",
    websiteUrl: "https://blackjack-taupe-beta.vercel.app",
    githubUrl: "https://github.com/SantiG11/blackjack",
    description:
      "Blackjack is a React card-game application that simulates a classic Blackjack table. Users can add virtual money, place bets, receive cards, and play against the dealer through a simple interactive game flow.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React State",
    ],
    imageSrc: blackjackScreen,
    imageAlt: "Blackjack site desktop screenshot",
  },
];
