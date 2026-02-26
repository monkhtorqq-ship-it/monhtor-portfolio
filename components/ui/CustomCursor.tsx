"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMoved, setIsMoved] = useState(false);

  // Хулганы үндсэн байршил
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Хөдөлгөөнийг зөөлөн, "Meteor" шиг болгох пүрш
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsMoved(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!isMoved) return null;

  return (
    <>
      {/* 1. Толгой хэсэг (Цогтой Meteor-ийн цөм) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. Сүүл хэсэг (Араас нь дагаж гэрэлтэх эффект) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-blue-500/30 rounded-full blur-xl pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* 3. Жижиг оч (Meteor-ийн хэлтэрхий мэт) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9997]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-200%",
          translateY: "-200%",
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.2, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
      />
    </>
  );
}