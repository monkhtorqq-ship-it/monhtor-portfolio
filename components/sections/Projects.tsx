"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  {
    number: "01",
    title: "Chroma-X",
    desc: "Photo studio — гэрэл зургийн студийн орчин үеийн веб сайт.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://chroma-x.vercel.app/",
    color: "from-violet-600/20 to-blue-600/10",
    border: "hover:border-violet-500/40",
  },
  {
    number: "02",
    title: "Kage",
    desc: "Кибер аюулгүй байдлын UI — төгсөлтийн хувийн ажил. Premium дизайн.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://kage-sooty.vercel.app/",
    color: "from-blue-600/20 to-cyan-600/10",
    border: "hover:border-blue-500/40",
  },
  {
    number: "03",
    title: "Nasah",
    desc: "Насаг — төгсөлтийн багийн хамтарсан төсөл.",
    tags: ["React", "JSX", "Tailwind CSS"],
    link: "https://nasah-site.vercel.app/",
    color: "from-cyan-600/20 to-teal-600/10",
    border: "hover:border-cyan-500/40",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal direction="up" delay={index * 0.15}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative rounded-[2rem] bg-gradient-to-br ${project.color} border border-white/10 ${project.border} transition-all duration-500 overflow-hidden cursor-pointer`}
      >
        {/* Number */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 text-5xl md:text-6xl font-black text-white/5 select-none">
          {project.number}
        </div>

        {/* Glow on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.color}`} />

        {/* Content — fixed height биш, padding-аар дүүргэнэ */}
        <div className="relative z-10 p-6 md:p-8 pt-16 md:pt-20 flex flex-col gap-3 md:gap-4">
          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-2 md:px-3 py-1">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            {project.title}
          </h3>

          {/* Desc */}
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            {project.desc}
          </p>

          {/* Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors border-b border-white/20 hover:border-white pb-1 w-fit mt-2"
          >
            Live site →
          </a>
        </div>
      </motion.div>
    </Reveal>
  );
};

const Projects = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <Container>
        <Reveal direction="up">
          <SectionTitle title="Featured Projects" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;