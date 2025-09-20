import React, { useState } from "react";
import Card from "./Card";

function AddMovieForm({ movies, onAddMovie }) {
  const [form, setForm] = useState({
    title: "",
    year: "",
    genre: "",
  });
  function changeForm(evt) {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }
  return (
    <Card>
      <form>
        <input
          type="text"
          value={form.title}
          name="title"
          placeholder="Название фильма"
          onChange={(evt) => {
            changeForm(evt);
          }}
        />
        <select
          value={form.genre}
          name="genre"
          id="genre"
          onChange={(evt) => {
            changeForm(evt);
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
          value={form.year}
          name="year"
          placeholder="Год фильма"
          onChange={(evt) => {
            changeForm(evt);
          }}
        />
        <button
          onClick={(evt) => {
            if (!form.genre) {
              return;
            }
            if (!form.title) {
              return;
            }
            if (!form.year) {
              return;
            }
            evt.preventDefault();
            const obj = {
              id: Date.now(),
              title: form.title,
              year: form.year,
              genre: form.genre,
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
