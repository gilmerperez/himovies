import styles from "./TVShows.module.css";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading/Loading";
import TVShowCard from "../components/TV Show Card/TVShowCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredContent, searchTVShows } from "../utils/api";

function TVShows() {
  // State hooks
  const [error, setError] = useState("");
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract filters from the URL parameters
  const filters = {
    year: searchParams.get("year") || "",
    genre: searchParams.get("genre") || "",
    country: searchParams.get("country") || "",
  };

  useEffect(() => {
    async function getData() {
      setError("");
      setLoading(true);
      try {
        const data = await fetchFilteredContent("tv", filters);
        setTVShows(data);
      } catch (error) {
        console.error("Failed to fetch tv shows", error);
        setError("Sorry, something went wrong while fetching the latest TV shows");
      } finally {
        setLoading(false);
      }
    }
    getData();
    // Warning that the filters object is missing a dependency in useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.year, filters.genre, filters.country]);

  // When user uses filters
  function handleFilterChange(updatedFilters) {
    setSearchTerm(""); // Clear search when filters are used
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
      const data = await searchTVShows(searchTerm);
      setTVShows(data);
    } catch (error) {
      console.error("Search failed", error);
      setError("Sorry, something went wrong while searching");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <title>Movix | TV Shows</title>
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
                // If Enter Key is pressed, search
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
                {tvShows.map((show) => (
                  <TVShowCard key={show.id} show={show} />
                ))}
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default TVShows;
