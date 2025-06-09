import styles from "./TopIMDB.module.css";
import { useState, useEffect } from "react";
import { fetchTopRatedMovies } from "../utils/api";
import TopIMDBCard from "../components/TopIMDBCard";

function TopIMDB() {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchTopRatedMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch Top Rated IMDB Movies", error);
        setError("Sorry, something went wrong while fetching the Top Rated IMDB Movies.");
      }
    }
    getData();
  }, []);

  return (
    <>
      <title>HiMovies | Top Rated on IMDB</title>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Top Rated on IMDB</h1>
          {/* Error Message */}
          {error && <div className={styles.error}>{error}</div>}
          {/* Search Bar */}
          <section className={styles.searchBar}>
            <input type="text" placeholder="Enter Keywords..." />
            <button>
              <i className="fa-solid fa-star"></i>
            </button>
          </section>
          {/* Top Rated Movie Cards */}
          <section className={styles.movieCards}>
            {movies.map((movie) => (
              <TopIMDBCard key={movie.id} movie={movie} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default TopIMDB;
