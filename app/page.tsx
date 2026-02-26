import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Navbar from "../components/layout/Navbar";

export default function HomePage() {
  return (
    <main className="relative bg-[#050505]">
      <Navbar />
      
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="projects" className="min-h-screen border-t border-white/5">
        <Projects />
      </section>

      <section id="skills" className="min-h-screen border-t border-white/5">
        <Skills />
      </section>

        <section id="contact" className="min-h-screen border-t border-white/5">
        <Contact />
      </section>
    </main>
  );
}