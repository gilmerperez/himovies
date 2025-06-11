import styles from "./Movies.module.css";
import Filter from "../components/Filter";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredContent } from "../utils/api";

function Movies() {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    year: searchParams.get("year") || "",
    genre: searchParams.get("genre") || "",
    country: searchParams.get("country") || "",
  };

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchFilteredContent("movie", filters);
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch Movies", error);
        setError("Sorry, something went wrong while fetching the latest Movies.");
      }
    }
    getData();
    // Warning that the filters object is missing a dependency in useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.year, filters.genre, filters.country]);

  function handleFilterChange(updatedFilters) {
    setSearchParams(updatedFilters);
  }

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
          {/* Filters */}
          <Filter onFilterChange={handleFilterChange} initialFilters={filters} />
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
