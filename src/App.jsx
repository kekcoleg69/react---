import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Action from "./components/pages/Action.jsx";
import Comedy from "./components/pages/Comedy.jsx";
import Drama from "./components/pages/Drama.jsx";
import Horror from "./components/pages/Horror.jsx";
import MainPage from "./components/pages/MainPage.jsx";

import AddMovieForm from "./components/AddMovieForm.jsx";
import MyModal from "./components/ui/MyModal/MyModal.jsx";
import "./index.css";

function App() {
  const navigate = useNavigate();

  const [genres, setGenres] = useState([
    "Отфильтровать фильмы",
    "all",
    "drama",
    "action",
    "comedy",
    "horror",
  ]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Терминатор 2: Судный день",
      year: 1991,
      genre: "action",
    },
    { id: 2, title: "Побег из Шоушенка", year: 1994, genre: "drama" },
    { id: 3, title: "Один дома", year: 1990, genre: "comedy" },
    { id: 4, title: "Сияние", year: 1980, genre: "horror" },
    { id: 5, title: "Крепкий орешек", year: 1988, genre: "action" },
  ]);

  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState("");
  function deleteMovie(arr, id) {
    const newArr = arr.filter((movie) => {
      return movie.id !== id;
    });
    setMovies(newArr);
  }
  function onAddMovie(arr, obj) {
    setMovies([...arr, obj]);
  }
  useEffect(() => {
    setSelectedGenre(selectedGenre);
  }, [selectedGenre]);

  return (
    <>
      <select
        id="genres"
        value={selectedGenre}
        onChange={(evt) => {
          navigate(evt.target.value);
          setSelectedGenre(evt.target.value);
        }}
      >
        {genres.map((genre) =>
          genre === "Отфильтровать фильмы" ? (
            <option key={genre} value="" disabled>
              {genre}
            </option>
          ) : (
            <option key={genre} value={genre}>
              {genre}
            </option>
          )
        )}
      </select>
      <button
        style={{ display: "block", marginTop: 30, marginBottom: 30 }}
        onClick={() => {
          setActive(true);
        }}
      >
        Добавить фильм
      </button>
      <MyModal
        active={active}
        setActive={setActive}
        title={"Добавьте свой фильм"}
      >
        <AddMovieForm
          movies={movies}
          onAddMovie={onAddMovie}
          genres={genres}
          setActive={setActive}
        />
      </MyModal>
      <Routes>
        <Route
          path="/all"
          element={
            <MainPage
              genres={genres}
              setGenres={setGenres}
              movies={movies}
              setMovies={setMovies}
              filter={filter}
              setFilter={setFilter}
              active={active}
              setActive={setActive}
              deleteMovie={deleteMovie}
              selectedGenre={selectedGenre}
              onAddMovie={onAddMovie}
            />
          }
        ></Route>
        <Route
          path="/drama"
          element={
            <Drama
              movies={movies}
              setMovies={setMovies}
              deleteMovie={deleteMovie}
              selectedGenre={selectedGenre}
            />
          }
        ></Route>
        <Route
          path="/action"
          element={
            <Action
              movies={movies}
              setMovies={setMovies}
              deleteMovie={deleteMovie}
              selectedGenre={selectedGenre}
            />
          }
        ></Route>
        <Route
          path="/comedy"
          element={
            <Comedy
              movies={movies}
              setMovies={setMovies}
              deleteMovie={deleteMovie}
              selectedGenre={selectedGenre}
            />
          }
        ></Route>
        <Route
          path="/horror"
          element={
            <Horror
              movies={movies}
              setMovies={setMovies}
              deleteMovie={deleteMovie}
              selectedGenre={selectedGenre}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
