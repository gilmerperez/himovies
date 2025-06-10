import styles from "./Movies.module.css";
import { fetchMovies } from "../utils/api";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch Movies", error);
        setError("Sorry, something went wrong while fetching the latest Movies.");
      }
    }
    getData();
  }, []);

  return (
    <>
      <title>Movix | Movies</title>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Movies</h1>
          {/* Error Message */}
          {error && <div className={styles.error}>{error}</div>}
          {/* Search Bar */}
          <section className={styles.searchBar}>
            <input type="text" placeholder="Enter Keywords..." />
            <button>
              <i class="fa-solid fa-film"></i>
            </button>
          </section>
          {/* Movie Cards */}
          <section className={styles.movieCards}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default Movies;
