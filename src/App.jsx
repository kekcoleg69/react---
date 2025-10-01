import { useEffect, useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import MyInput from "./components/ui/MyInput/MyInput";
import MyModal from "./components/ui/MyModal/MyModal";
import "./index.css";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Терминатор 2: Судный день",
      year: 1991,
      genre: "Боевик",
    },
    { id: 2, title: "Побег из Шоушенка", year: 1994, genre: "Драма" },
    { id: 3, title: "Один дома", year: 1990, genre: "Комедия" },
    { id: 4, title: "Сияние", year: 1980, genre: "Ужасы" },
    { id: 5, title: "Крепкий орешек", year: 1988, genre: "Боевик" },
  ]);
  const [genres, setGenres] = useState([
    "Отфильтровать фильмы",
    "Все",
    "Драма",
    "Боевик",
    "Комедия",
    "Ужасы",
  ]);
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([...movies]);
  useEffect(() => {
    setMovies(
      filteredMovies.filter((movie) => {
        return movie.title
          .toLowerCase()
          .startsWith(filter.trim().toLowerCase());
      })
    );
  }, [filter, filteredMovies]);
  function deleteMovie(arr, id) {
    const newArr = arr.filter((movie) => {
      return movie.id !== id;
    });
    setMovies(newArr);
    setFilteredMovies(newArr);
  }
  function onAddMovie(arr, obj) {
    setMovies([...arr, obj]);
    setFilteredMovies([...arr, obj]);
  }

  return (
    <div>
      <MyInput
        placeholder="Фильтрация по названию"
        value={filter}
        onChange={(evt) => {
          setFilter(evt.target.value);
        }}
      />

      <Filter setMovies={setMovies} movies={movies} genres={genres} />
      <button
        onClick={() => {
          setActive(true);
        }}
      >
        Добавить свой фильм
      </button>
      <MovieList movies={movies} deleteMovie={deleteMovie} />
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
    </div>
  );
}

export default App;
