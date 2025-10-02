import MovieList from "../MovieList";

export default function Action({ movies, deleteMovie, selectedGenre }) {
  return (
    <MovieList
      movies={movies}
      deleteMovie={deleteMovie}
      selectedGenre={selectedGenre}
    />
  );
}
