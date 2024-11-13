"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

export function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </motion.div>
  );
}