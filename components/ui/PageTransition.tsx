"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    // Phase 1: Show name for 1.2s
    const t1 = setTimeout(() => setPhase("reveal"), 1200);
    // Phase 2: Split & reveal after 0.8s more
    const t2 = setTimeout(() => setPhase("done"), 2200);
    // Phase 3: Unmount
    const t3 = setTimeout(() => setIsVisible(false), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Top panel */}
          <motion.div
            className="fixed inset-x-0 top-0 z-[9999] bg-[#050505] origin-top"
            initial={{ scaleY: 1 }}
            animate={phase === "done" ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{ height: "50vh", transformOrigin: "top" }}
          />

          {/* Bottom panel */}
          <motion.div
            className="fixed inset-x-0 bottom-0 z-[9999] bg-[#050505] origin-bottom"
            initial={{ scaleY: 1 }}
            animate={phase === "done" ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{ height: "50vh", transformOrigin: "bottom" }}
          />

          {/* Center name — фэйд аут хийгдээд дараа нь split болно */}
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
            animate={phase === "reveal" ? { opacity: 0, y: -30 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <motion.h1
              className="text-5xl md:text-8xl font-black tracking-tighter text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              MONKHTOR<span className="text-blue-500">.</span>
            </motion.h1>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}