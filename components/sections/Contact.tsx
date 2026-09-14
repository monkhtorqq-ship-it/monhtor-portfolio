"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Instagram, Send, Check, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import Container from "../ui/Container";
import MagneticButton from "../ui/MagneticButton";
import Reveal from "../ui/Reveal";

// ⚠️ EmailJS Dashboard-аасаа аваад солих
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">

          {/* Зүүн тал */}
          <Reveal direction="left">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
              Let&apos;s create <br />
              <span className="text-gray-500">something great.</span>
            </h2>
            <p className="mt-6 md:mt-8 text-gray-400 text-base md:text-lg max-w-md font-light">
              Танд шинэ санаа, төсөл эсвэл хамтран ажиллах санал байна уу? Надтай холбогдоорой.
            </p>

            <div className="mt-8 md:mt-12 flex gap-4 md:gap-6">
              {[
                { icon: <Github />, link: "https://github.com/monkhtorqq-ship-it" },
                { icon: <Instagram />, link: "https://www.instagram.com/xanaak__________/" },
                { icon: <Mail />, link: "mailto:your@email.com" },
              ].map((social, i) => (
                <MagneticButton key={i}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-colors duration-500"
                  >
                    {social.icon}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </Reveal>

          {/* Баруун тал: Form */}
          <Reveal direction="right" className="bg-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-blue-500 transition-all text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-blue-500 transition-all text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none text-sm md:text-base"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                className={`w-full font-bold py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 shadow-xl text-sm md:text-base ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                    ? "bg-red-500 text-white"
                    : "bg-white text-black hover:bg-blue-500 hover:text-white shadow-blue-500/10"
                }`}
              >
                {status === "sending" && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
                {status === "success" && <><Check size={18} /> Sent!</>}
                {status === "error" && <>Failed — try again</>}
                {status === "idle" && <>Send Message <Send size={18} /></>}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-green-400"
                >
                  Баярлалаа! Удахгүй холбогдох болно 🙌
                </motion.p>
              )}
            </form>
          </Reveal>

        </div>
      </Container>
    </section>
  );
};

export default Contact;