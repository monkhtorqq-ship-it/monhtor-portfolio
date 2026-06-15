"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Зүүн тал: Зураг */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-[2rem] scale-90" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[3/4] max-w-sm mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-gray-900 to-black flex items-center justify-center">
                <span className="text-white/20 text-sm tracking-widest uppercase">Your Photo</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-6 py-4"
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest">Based in</p>
              <p className="text-white font-bold mt-1">Ulaanbaatar, MN 🇲🇳</p>
            </motion.div>
          </motion.div>

          {/* Баруун тал: Текст */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-blue-500 mb-6">About me</p>

            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight mb-8">
              I build things <br />
              <span className="text-gray-600">for the web.</span>
            </h2>

            <div className="space-y-4 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                Би <span className="text-white">Full-Stack Developer</span> бөгөөд орчин үеийн технологиор
                хурдан, гоё, ашиглахад хялбар веб апликейшн бүтээдэг.
              </p>
              <p>
                Next.js, TypeScript, Tailwind CSS-ийг голчлон ашигладаг бөгөөд
                <span className="text-white"> хэрэглэгчийн туршлага</span>-г хамгийн чухалд тооцдог.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/cv.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-12 px-8 py-4 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              Download CV <span>↓</span>
            </motion.a>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;