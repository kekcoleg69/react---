import { useEffect, useState } from "react";

function Filter({ movies, genres, setMovies }) {
  const [displayedMovies, setDisplayedMovies] = useState(movies);

  const [genre, setGenre] = useState("");
  useEffect(() => {
    if (genre === "" || genre === "Все") {
      setMovies(displayedMovies);
      return;
    }
    let newArr = displayedMovies.filter((movie) => {
      return movie.genre === genre;
    });
    setMovies(newArr);
    console.log("aa");
  }, [genre]);

  return (
    <form>
      <select
        value={genre}
        onChange={(evt) => {
          setGenre(evt.target.value);
        }}
      >
        {genres.map((genre) => {
          return genre === "Отфильтровать фильмы" ? (
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
    </form>
  );
}

export default Filter;
