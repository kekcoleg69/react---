import React from "react";
import Card from "./Card";

function Movie({ movie, movies, deleteMovie }) {
  return (
    <Card>
      <li>
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
}

export default Movie;
