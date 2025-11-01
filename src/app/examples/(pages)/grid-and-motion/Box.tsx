"use client";

import { motion } from "motion/react";

interface BoxProps {
  color: string;
  title: string;
  description: string;
}

export default function Box({ color, title, description }: BoxProps) {
  return (
    <motion.div
      className={`w-full aspect-square flex flex-col justify-between items-center p-4 ${color}`}
      initial={{ borderRadius: "0%" }}
      whileHover={{ borderRadius: "100%" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
}
