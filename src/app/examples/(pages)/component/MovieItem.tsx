"use client";

import { motion } from "motion/react";
import type { Movie } from "./_data";

const COLLAPSED_HEIGHT = 32;
const EXPANDED_HEIGHT = 142;
const IMAGE_SIZE = 100;
const ANIMATION_DURATION = 0.2;

interface MovieItemProps {
  movie: Movie;
  isOpen: boolean;
  onToggle: (movie: Movie) => void;
}

export default function MovieItem({ movie, isOpen, onToggle }: MovieItemProps) {
  return (
    <button
      type="button"
      className="w-full bg-white cursor-pointer text-left"
      onClick={() => onToggle(movie)}
      aria-expanded={isOpen}
      aria-controls={`movie-content-${movie.id}`}
    >
      <motion.div
        className="border-b p-4 grid grid-rows-[auto_auto] overflow-hidden"
        initial={{ height: COLLAPSED_HEIGHT }}
        animate={{ height: isOpen ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT }}
        transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-3 items-center">
          <h2 className="font-medium">{movie.title}</h2>
          <p className="text-neutral-600">{movie.director}</p>
          <p className="text-neutral-600">{movie.year}</p>
        </div>
        <div
          id={`movie-content-${movie.id}`}
          className="mt-2 flex gap-2 overflow-x-auto"
        >
          {movie.images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${movie.title} scene ${index + 1}`}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              className="h-[100px] w-auto  object-cover rounded"
              loading="lazy"
            />
          ))}
        </div>
      </motion.div>
    </button>
  );
}
