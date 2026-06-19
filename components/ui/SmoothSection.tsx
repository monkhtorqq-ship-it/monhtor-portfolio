"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SmoothSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SmoothSection({ children, id, className = "" }: SmoothSectionProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Section fades in as it enters, fades out as it leaves
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.3, 1, 1, 0.3]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.97, 1, 1, 0.97]
  );

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, scale }}
      className={className}
    >
      {children}
    </motion.section>
  );
}