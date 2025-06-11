import styles from "./TVShows.module.css";
import Filter from "../components/Filter";
import { useState, useEffect } from "react";
import TVShowCard from "../components/TVShowCard";
import { fetchFilteredContent } from "../utils/api";

function TVShows() {
  const [error, setError] = useState("");
  const [tvShows, setTVShows] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchFilteredContent("tv", filters);
        setTVShows(data);
      } catch (error) {
        console.error("Failed to fetch TV shows", error);
        setError("Sorry, something went wrong while fetching the latest TV shows.");
      }
    }
    getData();
  }, [filters]);

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
          {/* Filters */}
          <Filter onFilterChange={setFilters} />
          {/* TV Show Cards */}
          <section className={styles.tvShowCards}>
            {tvShows.map((show) => (
              <TVShowCard key={show.id} show={show} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default TVShows;
