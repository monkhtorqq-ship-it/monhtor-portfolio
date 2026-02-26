"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import Container from "../ui/Container";
import MagneticButton from "../ui/MagneticButton";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(springY, [0, 1000], [5, -5]);
  const rotateY = useTransform(springX, [0, 2000], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden">
      
      {/* 1. Зөвхөн Interactive Spotlight (Хулгана дагадаг зөөлөн туяа) */}
      <motion.div
        style={{ left: springX, top: springY }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] z-1"
      />

      <Container>
        <motion.div 
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative z-10 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase">
              Available for new projects
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[13vw] md:text-[9vw] font-black tracking-tighter text-white leading-[0.8] mb-10">
              DIGITAL <br />
              <span className="text-neutral-800 outline-text">ARCHITECT.</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            Би орчин үеийн технологиор дамжуулан <br />
            <span className="text-white">хэрэглэгчдэд мартагдашгүй туршлага</span> бэлэглэдэг.
          </motion.p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <MagneticButton>
              <button className="px-12 py-5 bg-white text-black rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500">
                Let's Talk
              </button>
            </MagneticButton>

            <button className="group flex items-center gap-3 text-white/50 hover:text-white transition-all">
              <span className="text-sm font-bold uppercase tracking-widest">My Projects</span>
              <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-blue-500 transition-all"></span>
            </button>
          </div>
        </motion.div>
      </Container>

      {/* Luxury Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] pointer-events-none z-20"></div>
    </section>
  );
};

export default Hero;