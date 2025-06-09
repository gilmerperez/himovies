import styles from "./Movies.module.css";
import MovieCard from "../components/MovieCard";

function Movies() {
  return (
    <>
      <head>
        <title>HiMovies | Movies</title>
      </head>

      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Movies</h1>
          {/* Search Bar */}
          <section className={styles.searchBar}>
            <input type="text" placeholder="Enter Keywords..." />
            <button>
              <i class="fa-solid fa-film"></i>
            </button>
          </section>
          {/* Movie Cards */}
          <section className={styles.movieCards}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </section>
        </div>
      </main>
    </>
  );
}

export default Movies;
