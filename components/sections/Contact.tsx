"use client";
import { motion } from "framer-motion";
import { Mail, Github, Instagram, Linkedin, Send } from "lucide-react";
import Container from "../ui/Container";
import MagneticButton from "../ui/MagneticButton";

const Contact = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Зүүн тал: Text & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Let's create <br /> 
              <span className="text-gray-500">something great.</span>
            </h2>
            <p className="mt-8 text-gray-400 text-lg max-w-md font-light">
              Танд шинэ санаа, төсөл эсвэл хамтран ажиллах санал байна уу? Надтай холбогдоорой.
            </p>

            <div className="mt-12 flex gap-6">
              {[
                { icon: <Github />, link: "#" },
                { icon: <Linkedin />, link: "#" },
                { icon: <Instagram />, link: "#" },
                { icon: <Mail />, link: "mailto:your@email.com" }
              ].map((social, i) => (
                <MagneticButton key={i}>
                  <a 
                    href={social.link}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-colors duration-500"
                  >
                    {social.icon}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* Баруун тал: Simple Luxury Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/10"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;