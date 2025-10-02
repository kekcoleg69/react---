import MovieList from "../MovieList";

export default function Comedy({ movies, deleteMovie, selectedGenre }) {
  return (
    <MovieList
      movies={movies}
      deleteMovie={deleteMovie}
      selectedGenre={selectedGenre}
    />
  );
}
