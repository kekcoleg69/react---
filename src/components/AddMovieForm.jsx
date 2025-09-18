import React, { useState } from "react";
import Card from "./Card";

function AddMovieForm({ movies, onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  return (
    <Card>
      <form>
        <input
          type="text"
          value={title}
          placeholder="Название фильма"
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        />
        <select
          value={genre}
          name="genre"
          id="genre"
          onChange={(evt) => {
            setGenre(evt.target.value);
          }}
        >
          <option value="" disabled>
            Жанр фильма
          </option>

          <option value="Драма">Драма</option>
          <option value="Боевик">Боевик</option>
          <option value="Комедия">Комедия</option>
          <option value="Ужасы">Ужасы</option>
        </select>
        <input
          type="text"
          value={year}
          placeholder="Год фильма"
          onChange={(evt) => {
            setYear(evt.target.value);
          }}
        />
        <button
          onClick={(evt) => {
            if (!genre) {
              return;
            }
            if (!title) {
              return;
            }
            if (!year) {
              return;
            }
            evt.preventDefault();
            const obj = {
              id: Date.now(),
              title: title,
              year: year,
              genre: genre,
            };
            onAddMovie(movies, obj);
          }}
        >
          Добавить фильм
        </button>
      </form>
    </Card>
  );
}

export default AddMovieForm;
