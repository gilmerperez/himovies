import styles from "./TVShows.module.css";
import { fetchTVShows } from "../utils/api";
import { useState, useEffect } from "react";
import TVShowCard from "../components/TVShowCard";

function TVShows() {
  const [error, setError] = useState("");
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchTVShows();
        setTVShows(data);
      } catch (error) {
        console.error("Failed to fetch TV shows", error);
        setError("Sorry, something went wrong while fetching the latest TV shows.");
      }
    }
    getData();
  }, []);

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
