import wardrobeTrackerScreen from "../assets/projects/wardrobe-tracker-screen.webp";
import formula1Screen from "../assets/projects/formula-1-two-omega.vercel.app_screenshot.png";
import blackjackScreen from "../assets/projects/Blackjack-Screenshot.png";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

const projects = [
  {
    name: "Wardrobe Tracker",
    websiteUrl: "https://wardrobe-tracker-one.vercel.app/",
    githubUrl: "https://github.com/SantiG11/wardrobe-tracker",
    description:
      "Wardrobe Tracker is a responsive React application for organizing a personal clothing collection and planning future purchases. It lets users keep track of the clothes they already own, manage a wishlist of items they want to buy, and see a quick overview of their wardrobe and shopping plans from a simple dashboard.",
    technologies: [
      "React",
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Git",
    ],
    imageSrc: wardrobeTrackerScreen,
    imageAlt: "Wardrobe Tracker desktop screenshot",
  },
  {
    name: "Formula 1",
    websiteUrl: "https://formula-1-two-omega.vercel.app",
    githubUrl: "https:github.com/SantiG11/formula-1",
    description:
      "A fan-made Formula 1 web application that displays information about the current season, including the next race, latest race results, championship standings, drivers, teams, circuits, and the race calendar.",
    technologies: [
      "React",
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "Git",
    ],
    imageSrc: formula1Screen,
    imageAlt: "Formula 1 project desktop screenshot",
  },
  {
    name: "Blackjack",
    websiteUrl: "https://blackjack-taupe-beta.vercel.app",
    githubUrl: "https://github.com/SantiG11/blackjack",
    description:
      "This project simulates a classic Blackjack table where users can add virtual money, place bets, receive cards, and play against the dealer. The game does not include advanced Blackjack actions such as split, double down, insurance, or surrender.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Git",
      "GitHub",
    ],
    imageSrc: blackjackScreen,
    imageAlt: "Blackjack site desktop screenshot",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Mock project cards with consistent image space and complete project metadata."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
            description={project.description}
            technologies={project.technologies}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </Section>
  );
}
