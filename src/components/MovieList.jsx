import React from "react";
import Movie from "./Movie";

function MovieList({ movies, deleteMovie }) {
  return (
    <ol>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            movie={movie}
            deleteMovie={deleteMovie}
            movies={movies}
          />
        );
      })}
    </ol>
  );
}

export default MovieList;
