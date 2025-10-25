import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#021018] via-[#071029] to-[#05060a] text-white">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
