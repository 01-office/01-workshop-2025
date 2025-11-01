"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export default function ScrollIndicatorPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container });

  return (
    <div ref={container} className="fixed inset-0 overflow-y-auto">
      <div className="sticky top-0 h-1 bg-white">
        <motion.div
          className="size-full origin-left bg-black"
          style={{
            scaleX: scrollYProgress,
          }}
        />
      </div>
      <div>
        {new Array(30).fill(0).map((_, index) => (
          <div
            key={String(index)}
            className="h-svh flex items-center justify-center"
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <p className="text-white text-2xl font-bold">{index}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
