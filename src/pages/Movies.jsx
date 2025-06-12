import styles from "./Movies.module.css";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading/Loading";
import MovieCard from "../components/Movie Card/MovieCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredContent, searchMovies } from "../utils/api";

function Movies() {
  // State hooks
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract filters from the URL parameters
  const filters = {
    year: searchParams.get("year") || "",
    genre: searchParams.get("genre") || "",
    country: searchParams.get("country") || "",
  };

  // Fetch filtered content on filter change, not search change
  useEffect(() => {
    async function getData() {
      setError("");
      setLoading(true);
      try {
        const data = await fetchFilteredContent("movie", filters);
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies", error);
        setError("Sorry, something went wrong while fetching the latest movies");
      } finally {
        setLoading(false);
      }
    }
    getData();
    // * Warning that the filters object is missing a dependency in useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.year, filters.genre, filters.country]);

  // When user uses filters
  function handleFilterChange(updatedFilters) {
    setSearchTerm(""); // Clear search when user uses filters
    setSearchParams(updatedFilters); // Update filters
  }

  // Manual input update
  function handleSearchInputChange(event) {
    setSearchTerm(event.target.value);
  }

  // Keyword search
  async function handleSearch() {
    // Prevent empty searches
    if (!searchTerm.trim()) {
      setError("Please enter a keyword to search");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await searchMovies(searchTerm);
      setMovies(data);
    } catch (error) {
      console.error("Search failed", error);
      setError("Sorry, something went wrong while searching");
    } finally {
      setLoading(false);
    }
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
            <input
              type="text"
              placeholder="Enter Keywords..."
              value={searchTerm}
              onChange={handleSearchInputChange}
              onKeyDown={(event) => {
                // If Enter Key is pressed, search
                if (event.key === "Enter") handleSearch();
              }}
            />
            <button onClick={handleSearch}>
              <i className="fa-solid fa-film"></i>
            </button>
          </section>
          {/* Loading or Results */}
          {loading ? (
            <Loading />
          ) : (
            <>
              {/* Filters */}
              <Filter onFilterChange={handleFilterChange} initialFilters={filters} />
              {/* Movie Cards */}
              <section className={styles.movieCards}>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default Movies;
