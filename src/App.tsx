import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app-shell min-h-screen bg-[#07090c] text-zinc-100">
      <NavBar />
      <main className="content-layer mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <footer className="py-12 text-sm text-zinc-400">
          (c) {new Date().getFullYear()} Santi. Built with React + TypeScript.
        </footer>
      </main>
    </div>
  );
}

export default App;
