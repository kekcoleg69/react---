import React, { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import "./index.css";
import Filter from "./components/Filter";
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
  const [displayedMovies, setDisplayedMovies] = useState(movies);

  function deleteMovie(arr, id) {
    const newArr = arr.filter((movie) => {
      return movie.id !== id;
    });
    setMovies(newArr);
  }
  function onAddMovie(arr, obj) {
    setMovies([...arr, obj]);
  }
  function filteredMovies(arr, genre) {
    let newArr = arr.filter((movie) => {
      return movie.genre === genre;
    });
    if (genre === "Все") {
      setMovies(arr);
      return;
    }
    setMovies(newArr);
  }
  return (
    <div>
      <Filter
        displayedMovies={displayedMovies}
        filteredMovies={filteredMovies}
        movies={movies}
      />
      <AddMovieForm movies={movies} onAddMovie={onAddMovie} />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
