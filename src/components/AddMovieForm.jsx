import React, { useState } from "react";
import Card from "./Card";
import MyInput from "../components/ui/MyInput/MyInput";

function AddMovieForm({ movies, onAddMovie, genres }) {
  const [form, setForm] = useState({
    title: "",
    year: "",
    genre: "",
  });
  function changeForm(evt) {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }
  const chooseGenre = [...genres];
  chooseGenre[0] = "Выбрать жанр";
  return (
    <Card>
      <form>
        <MyInput
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
          {chooseGenre.map((genre) => {
            return genre === "Выбрать жанр" ? (
              <option key={genre} value="" disabled>
                {genre}
              </option>
            ) : (
              <option key={genre} value={genre}>
                {genre}
              </option>
            );
          })}
        </select>
        <MyInput
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
