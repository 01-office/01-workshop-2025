"use client";

import { useState } from "react";
import type { Movie } from "./_data";
import { MOVIES } from "./_data";
import MovieItem from "./MovieItem";

export default function ComponentPage() {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const handleToggleMovie = (movie: Movie) => {
    setSelectedMovieId((prev) => (prev === movie.id ? null : movie.id));
  };

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 grid grid-cols-3 border-b bg-neutral-200 p-4 text-center">
        <h1 className="font-semibold">Title</h1>
        <h1 className="font-semibold">Director</h1>
        <h1 className="font-semibold">Year</h1>
      </header>
      {MOVIES.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          isOpen={selectedMovieId === movie.id}
          onToggle={handleToggleMovie}
        />
      ))}
    </div>
  );
}
