import React from "react";
import Movie from "./Movie";

function MovieList({ movies, deleteMovie }) {
  return (
    <ol>
      <Movie movies={movies} deleteMovie={deleteMovie} />
    </ol>
  );
}

export default MovieList;
