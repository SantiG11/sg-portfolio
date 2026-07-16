import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="max-w-3xl space-y-4 text-base text-zinc-300">
        <p>
          I’m a front-end developer from Argentina, currently studying
          programming and building React projects as I work toward my first
          front-end role. My recent work includes practical applications like a
          wardrobe tracker, a Formula 1 dashboard, and a Blackjack game, where
          I’ve practiced responsive layouts, routing, client-side data, and
          interactive state logic.
        </p>
        <p>
          I enjoy building interfaces that are clear, organized, and easy to
          use. I’m focused on improving through real projects, writing
          maintainable components, and developing the habits needed to
          contribute to a professional front-end team.
        </p>
      </div>
    </Section>
  );
}
