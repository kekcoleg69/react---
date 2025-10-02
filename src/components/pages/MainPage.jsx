import AddMovieForm from "../AddMovieForm";
import MovieList from "../MovieList";
import MyModal from "../ui/MyModal/MyModal";
export default function MainPage({
  genres,
  movies,
  active,
  setActive,
  deleteMovie,
  selectedGenre,
  onAddMovie,
}) {
  return (
    <div>
      <MovieList
        selectedGenre={selectedGenre}
        movies={movies}
        deleteMovie={deleteMovie}
      />
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
