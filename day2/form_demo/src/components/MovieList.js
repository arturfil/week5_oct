import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";

const moviesDb = [
  {
    title: "Predator",
    director: "John McTiernan",
    rating: 7.8,
    hasOscar: false
  }
]

function MovieList() {
  const [movies, setMovies] = useState([...moviesDb]);

  return (
    <div>

      <AddMovie props={movies} callback={setMovies} />

      {movies.map((movie, i) => (
        <MovieCard key={i} giraffe={movie} />
      ))}
    </div>
  )
}

export default MovieList;