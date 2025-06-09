import styles from "./Movies.module.css";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchLatestMovies } from "../utils/api";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchLatestMovies();
        setMovies(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

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
