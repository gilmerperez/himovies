import styles from "./TopIMDB.module.css";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";
import { fetchTopRatedMovies } from "../utils/api";
import TopIMDBCard from "../components/Top IMDB Card/TopIMDBCard";

function TopIMDB() {
  // State hooks
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const data = await fetchTopRatedMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch Top Rated IMDB Movies", error);
        setError("Sorry, something went wrong while fetching the Top Rated IMDB Movies.");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const filteredMovies = movies.filter((movie) => movie.title?.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <title>Movix | Top Rated on IMDB</title>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Top Rated on IMDB</h1>
          {/* Error Message */}
          {error && <div className={styles.error}>{error}</div>}
          {/* Search Bar */}
          <section className={styles.searchBar}>
            <input
              type="text"
              placeholder="Enter Keywords..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button>
              <i className="fa-solid fa-trophy"></i>
            </button>
          </section>
          {/* Loading or Results */}
          {loading ? (
            <Loading />
          ) : (
            <>
              {/* Top IMDB Cards */}
              <section className={styles.topIMDBCards}>
                {filteredMovies.length > 0
                  ? filteredMovies.map((movie) => <TopIMDBCard key={movie.id} movie={movie} />)
                  : null}
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default TopIMDB;
