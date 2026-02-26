"use client";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  Zap 
} from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const skills = [
  { name: "React", icon: <Layout className="w-8 h-8" />, color: "hover:text-blue-400", glow: "group-hover:shadow-blue-500/20" },
  { name: "Next.js", icon: <Zap className="w-8 h-8" />, color: "hover:text-white", glow: "group-hover:shadow-white/20" },
  { name: "TypeScript", icon: <Code2 className="w-8 h-8" />, color: "hover:text-blue-500", glow: "group-hover:shadow-blue-600/20" },
  { name: "Tailwind CSS", icon: <Layers className="w-8 h-8" />, color: "hover:text-cyan-400", glow: "group-hover:shadow-cyan-400/20" },
  { name: "Node.js", icon: <Cpu className="w-8 h-8" />, color: "hover:text-green-500", glow: "group-hover:shadow-green-500/20" },
  { name: "Three.js", icon: <Globe className="w-8 h-8" />, color: "hover:text-purple-400", glow: "group-hover:shadow-purple-500/20" },
];

const Skills = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>

      <Container>
        <div className="text-center mb-20">
          <SectionTitle title="Technical Stack" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 mt-4 tracking-widest uppercase text-xs"
          >
            The tools I use to build the future
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`
                h-40 flex flex-col items-center justify-center gap-4 
                bg-white/5 border border-white/10 rounded-2xl 
                transition-all duration-500 cursor-default
                group-hover:bg-white/10 group-hover:border-white/20
                ${skill.glow} group-hover:shadow-2xl
              `}>
                <div className={`text-gray-400 transition-colors duration-300 ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-gray-300 font-medium tracking-tight group-hover:text-white transition-colors">
                  {skill.name}
                </span>

                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-0 group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;