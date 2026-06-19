import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Navbar from "../components/layout/Navbar";
import PageTransition from "../components/ui/PageTransition";
import SmoothSection from "../components/ui/SmoothSection";

export default function HomePage() {
  return (
    <>
      <PageTransition />
      <main className="relative z-10">
        <Navbar />

        <SmoothSection id="home" className="min-h-screen">
          <Hero />
        </SmoothSection>

        <SmoothSection id="about" className="min-h-screen border-t border-white/5">
          <About />
        </SmoothSection>

        <SmoothSection id="projects" className="min-h-screen border-t border-white/5">
          <Projects />
        </SmoothSection>

        <SmoothSection id="skills" className="min-h-screen border-t border-white/5">
          <Skills />
        </SmoothSection>

        <SmoothSection id="contact" className="min-h-screen border-t border-white/5">
          <Contact />
        </SmoothSection>
      </main>
    </>
  );
}