"use client";

import { motion } from "motion/react";
import type { Movie } from "./_data";
import Image from "next/image";

interface MovieItemProps {
  item: Movie;
  isOpen: boolean;
  onClick: (movie: Movie) => void;
}

export default function MovieItem({ item, isOpen, onClick }: MovieItemProps) {
  return (
    <button
      type="button"
      className="bg-white cursor-pointer"
      onClick={() => onClick(item)}
    >
      <motion.div
        className="border-b p-1 grid grid-rows-[32px_auto] overflow-hidden"
        initial={{ height: 32 }}
        animate={{ height: isOpen ? 142 : 32 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-3">
          <h2>{item.title}</h2>
          <p>{item.director}</p>
          <p>{item.year}</p>
        </div>
        <div className="pb-1 flex gap-1">
          {item.images.map((image) => (
            <img
              key={image}
              src={image}
              alt={item.title}
              width={100}
              height={100}
              className="h-[100px] w-auto"
            />
          ))}
        </div>
      </motion.div>
    </button>
  );
}
