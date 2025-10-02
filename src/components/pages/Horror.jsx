import MovieList from "../MovieList";

export default function Horror({ movies, deleteMovie, selectedGenre }) {
  return (
    <MovieList
      movies={movies}
      deleteMovie={deleteMovie}
      selectedGenre={selectedGenre}
    />
  );
}
