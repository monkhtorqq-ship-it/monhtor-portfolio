"use client";
import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">

      {/* === BACKGROUND: Portrait photo === */}
      <Image
        src="/ted-removebg-preview.png"
        fill
        className="object-contain object-[center_top]"
        style={{ objectPosition: "center 10%" }}
        alt="Monkhtor"
        priority
      />

      {/* Violet glow — зураг ард, хүний дуглах мэт */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/25 rounded-full blur-[130px]" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-12 md:px-16 flex items-center justify-between min-h-screen py-24">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-6 max-w-sm"
        >
          <div>
            <p className="text-violet-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">
              Hello, I&apos;m
            </p>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
              Monkhtor
            </h1>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            {[
              { label: "GitHub", link: "#" },
              { label: "LinkedIn", link: "#" },
              { label: "Instagram", link: "#" },
              { label: "Email", link: "mailto:your@email.com" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Center spacer */}
        <div className="flex-1" />

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-end gap-8 max-w-xs"
        >
          <div className="text-right">
            <p className="text-violet-400 text-sm font-bold uppercase tracking-[0.3em] mb-2">
              Creative
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
              <span className="text-white">Developer</span><br />
              <span className="text-gray-500">&amp; Designer</span>
            </h2>
          </div>

          <p className="text-gray-400 text-right text-sm font-light leading-relaxed max-w-[200px]">
            Орчин үеийн технологиор хэрэглэгчдэд мартагдашгүй туршлага бэлэглэдэг.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MagneticButton>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white uppercase tracking-widest transition-colors border-b border-white/20 hover:border-white pb-1"
              >
                Resume ↓
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Available badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        <span className="text-xs text-white font-medium tracking-widest uppercase">Available for new projects</span>
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none z-20" />
    </section>
  );
};

export default Hero;