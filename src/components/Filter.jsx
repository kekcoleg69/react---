import React, { useState } from "react";

function Filter({ movies, displayedMovies, filteredMovies }) {
  const [genre, setGenre] = useState("");
  return (
    <form>
      <select
        value={genre}
        onChange={(evt) => {
          setGenre(evt.target.value);
        }}
      >
        <option value="" disabled>
          Отфильтровать фильмы
        </option>
        <option value="Все">Все</option>
        <option value="Драма">Драма</option>
        <option value="Боевик">Боевик</option>
        <option value="Комедия">Комедия</option>
        <option value="Ужасы">Ужасы</option>
      </select>
      <button
        onClick={(evt) => {
          evt.preventDefault();

          filteredMovies(displayedMovies, genre);
        }}
      >
        Отфильровать
      </button>
    </form>
  );
}

export default Filter;
