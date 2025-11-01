"use client";

import { useState } from "react";
import type { Movie } from "./_data";
import { MOVIES } from "./_data";
import MovieItem from "./MovieItem";

export default function ComponentPage() {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  const handleClickMovie = (movie: Movie) => {
    if (currentMovie?.id === movie.id) {
      setCurrentMovie(null);
      return;
    }
    setCurrentMovie(movie);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 border-b p-1 bg-neutral-200 sticky top-0 inset-x-0 text-center">
        <h1>Title</h1>
        <h1>Director</h1>
        <h1>Year</h1>
      </div>
      {MOVIES.map((item) => (
        <MovieItem
          key={item.id}
          item={item}
          isOpen={currentMovie?.id === item.id}
          onClick={handleClickMovie}
        />
      ))}
    </div>
  );
}
