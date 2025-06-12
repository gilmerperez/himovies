import styles from "./Movies.module.css";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading/Loading";
import MovieCard from "../components/MovieCard/MovieCard";
import Pagination from "../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredContent, searchMovies } from "../utils/api";
import { useState, useEffect, useMemo, useCallback } from "react";

function Movies() {
  // State hooks
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  // Change page title
  useEffect(() => {
    document.title = "Movix | Movies";
  }, []);

  // Extract filters from the URL parameters, using useMemo to prevent unnecessary effect triggers
  const filters = useMemo(
    () => ({
      year: searchParams.get("year") || "",
      genre: searchParams.get("genre") || "",
      country: searchParams.get("country") || "",
    }),
    [searchParams]
  );

  // Fetch filtered content on filter change, not search change. With abort controller for cleanup
  useEffect(() => {
    const controller = new AbortController();

    async function getData() {
      setError("");
      setLoading(true);
      try {
        const data = await fetchFilteredContent("movie", { ...filters, page }, 52, controller.signal);
        setMovies(data.results);
        setTotalResults(data.totalResults);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch movies", error);
          setError("Sorry, something went wrong while fetching the latest movies");
        }
      } finally {
        setLoading(false);
      }
    }
    getData();
    return () => {
      controller.abort();
    };
  }, [filters, page]);

  // When user uses filters, wrapped in useCallback
  const handleFilterChange = useCallback(
    (updatedFilters) => {
      setSearchTerm(""); // Clear search when user uses filters
      setSearchParams(updatedFilters); // Update filters
    },
    [setSearchParams]
  );

  // Manual input update, wrapped in useCallback
  const handleSearchInputChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  // Keyword search, wrapped in useCallback
  const handleSearch = useCallback(async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a keyword to search");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await searchMovies(searchTerm);
      setPage(1); // Reset to first page
      setMovies(data.results);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error("Search failed", error);
      setError("Sorry, something went wrong while searching");
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  // Calculates total pages based on TMDB results
  const maxPagesToShow = 10;
  const totalPages = Math.min(Math.ceil(totalResults / 52), maxPagesToShow);

  // On page change, wrapped in useCallback
  const handlePageChange = useCallback(
    (newPage) => {
      if (newPage < 1 || newPage > totalPages) return;
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [totalPages]
  );

  return (
    <>
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
              <Filter filters={filters} onFilterChange={handleFilterChange} />
              {/* Movie Cards */}
              <section className={styles.movieCards}>
                {movies.map((movie, index) => (
                  <MovieCard key={`${movie.id}-${index}`} movie={movie} />
                ))}
              </section>
              {/* Pagination */}
              <Pagination page={page} onPageChange={handlePageChange} totalPages={totalPages} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default Movies;
