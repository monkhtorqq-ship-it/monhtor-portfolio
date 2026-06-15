import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Navbar from "../components/layout/Navbar";
import PageTransition from "../components/ui/PageTransition";

export default function HomePage() {
  return (
    <>
      <PageTransition />
      <main className="relative">  {/* ← bg-[#050505] хасав */}
        <Navbar />
        
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen border-t border-white/5">
          <About />
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
    </>
  );
}