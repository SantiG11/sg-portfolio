import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 text-base text-zinc-300">
        <p>
          I am a front-end developer focused on building clean, responsive
          interfaces and practical web apps.
        </p>
        <p>
          I enjoy turning ideas into polished UI, organizing components, and
          keeping state logic predictable and maintainable.
        </p>
      </div>
    </Section>
  );
}
