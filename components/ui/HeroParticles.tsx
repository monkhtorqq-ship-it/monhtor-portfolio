"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function HeroParticles() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Хөдөлгөөнийг илүү зөөлөн (luxury) болгох пүрш
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ x: -springX, y: -springY }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[150px]"
      />
    </div>
  );
}