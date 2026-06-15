"use client";
import { motion } from "framer-motion";

interface Props {
  number?: string;
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<Props> = ({ number, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      {number && (
        <p className="text-xs uppercase tracking-[0.4em] text-blue-500 mb-4">
          {number}
        </p>
      )}
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-500 text-lg font-light max-w-xl">
          {subtitle}
        </p>
      )}
      <div className="mt-6 w-12 h-px bg-blue-500/50" />
    </motion.div>
  );
};

export default SectionTitle;