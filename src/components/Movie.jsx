import React from "react";
import Card from "./Card";

function Movie({ movies, deleteMovie }) {
  return movies.map((movie, index) => {
    return (
      <Card>
        <li key={movie.id}>
          <span>Название: {movie.title} ||</span>
          <span>Жанр: {movie.genre} ||</span>
          <span>Год: {movie.year}</span>
          <button
            onClick={() => {
              deleteMovie(movies, movie.id);
            }}
          >
            Удалить фильм
          </button>
        </li>
      </Card>
    );
  });
}

export default Movie;
