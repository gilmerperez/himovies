import styles from "./TVShows.module.css";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination/Pagination";
import TVShowCard from "../components/TV Show Card/TVShowCard";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import { fetchFilteredContent, searchTVShows } from "../utils/api";

function TVShows() {
  // State hooks
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  // Change page title
  useEffect(() => {
    document.title = "Movix | TV Shows";
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

  const RESULTS_PER_PAGE = 52;
  const MAX_PAGES_TO_SHOW = 10;

  useEffect(() => {
    const controller = new AbortController();

    async function getData() {
      setError("");
      setLoading(true);
      try {
        const data = await fetchFilteredContent("tv", { ...filters, page }, RESULTS_PER_PAGE, controller.signal);
        setTVShows(data.results || data);
        setTotalResults(data.totalResults || (data.results ? data.results.length : data.length));
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch tv shows", error);
          setError("Sorry, something went wrong while fetching the latest tv shows");
        }
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [filters, page]);

  // When user uses filters, wrapped in useCallback
  const handleFilterChange = useCallback(
    (updatedFilters) => {
      setSearchTerm(""); // Clear search when user uses filters
      setSearchParams(updatedFilters); // Update filters
      setPage(1); // Reset to first page on filter change
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
      const data = await searchTVShows(searchTerm);
      setPage(1); // Reset to first page
      setTVShows(data.results || data);
      setTotalResults(data.totalResults || (data.results ? data.results.length : data.length));
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
          <h1 className={styles.heading}>TV Shows</h1>
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
              <i className="fa-solid fa-tv"></i>
            </button>
          </section>
          {/* Loading or Results */}
          {loading ? (
            <Loading />
          ) : (
            <>
              {/* Filters */}
              <Filter onFilterChange={handleFilterChange} initialFilters={filters} />
              {/* TV Show Cards */}
              <section className={styles.tvShowCards}>
                {tvShows.map((show, index) => (
                  <TVShowCard key={`${show.id}-${index}`} show={show} />
                ))}
              </section>
              {/* Pagination */}
              {totalPages > 1 && <Pagination page={page} onPageChange={handlePageChange} totalPages={totalPages} />}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default TVShows;
