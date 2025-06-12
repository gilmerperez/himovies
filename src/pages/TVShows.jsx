import styles from "./TVShows.module.css";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";
import TVShowCard from "../components/TV Show Card/TVShowCard";
import { useSearchParams } from "react-router-dom";
import { fetchFilteredContent } from "../utils/api";

function TVShows() {
  const [error, setError] = useState("");
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    year: searchParams.get("year") || "",
    genre: searchParams.get("genre") || "",
    country: searchParams.get("country") || "",
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const data = await fetchFilteredContent("tv", filters);
        setTVShows(data);
      } catch (error) {
        console.error("Failed to fetch TV shows", error);
        setError("Sorry, something went wrong while fetching the latest TV shows.");
      } finally {
        setLoading(false);
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
      <title>Movix | TV Shows</title>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>TV Shows</h1>
          {/* Error Message */}
          {error && <div className={styles.error}>{error}</div>}
          {/* Search Bar */}
          <section className={styles.searchBar}>
            <input type="text" placeholder="Enter Keywords..." />
            <button>
              <i className="fa-solid fa-tv"></i>
            </button>
          </section>
          {/* Loading or Content */}
          {loading ? (
            <Loading />
          ) : (
            <>
              {/* Filters */}
              <Filter onFilterChange={handleFilterChange} type="tv" initialFilters={filters} />
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
