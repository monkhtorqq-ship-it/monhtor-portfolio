"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-[100] flex justify-center p-6 transition-all duration-500">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center justify-between px-8 py-3 transition-all duration-500
          ${scrolled 
            ? "bg-white/5 backdrop-blur-xl border border-white/10 rounded-full w-[90%] md:w-[60%] shadow-2xl" 
            : "bg-transparent w-full"}
        `}
      >
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-black tracking-tighter text-white cursor-pointer"
        >
          MONKHTOR<span className="text-blue-500">.</span>
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Xanaak
        </motion.a>
      </motion.nav>
    </div>
  );
};

export default Navbar;