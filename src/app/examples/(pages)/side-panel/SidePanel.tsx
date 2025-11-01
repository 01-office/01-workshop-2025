"use client";

import { motion } from "motion/react";

interface SidePanelProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function SidePanel({ children, isOpen }: SidePanelProps) {
  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 w-[50vw] bg-white overflow-y-auto border-l border-black"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
