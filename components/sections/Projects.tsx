"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const ProjectCard = ({ title, desc }: { title: string; desc: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-gray-900 to-black p-8 border border-white/10"
    >
      <div style={{ transform: "translateZ(75px)" }} className="flex flex-col justify-end h-full">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{desc}</p>
        <div className="mt-6 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold italic">
          →
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <Container>
        <SectionTitle title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <ProjectCard title="Cyber Portfolio" desc="A futuristic experience built with Three.js" />
          <ProjectCard title="Luxury App" desc="Next-gen interface for high-end clients" />
        </div>
      </Container>
    </section>
  );
};

export default Projects;