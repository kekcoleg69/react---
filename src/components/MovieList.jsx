import Movie from "./Movie";

function MovieList({ movies, deleteMovie, selectedGenre }) {
  const visibleMovies =
    selectedGenre === "all"
      ? movies
      : movies.filter((movie) => {
          return movie.genre === selectedGenre;
        });
  return (
    <ol>
      {visibleMovies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            movie={movie}
            deleteMovie={deleteMovie}
            movies={movies}
          />
        );
      })}
    </ol>
  );
}

export default MovieList;
