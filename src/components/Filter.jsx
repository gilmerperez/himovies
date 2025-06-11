import styles from "./Filters.module.css";
import { useState, useEffect } from "react";
import { fetchMovieGenres } from "../utils/api";

function Filter({ onFilterChange }) {
  const [genres, setGenres] = useState([]);
  const [filters, setFilters] = useState({ year: "", genre: "", country: "" });

  useEffect(() => {
    async function loadGenres() {
      const genreMap = await fetchMovieGenres();
      const genreList = Object.entries(genreMap).map(([id, name]) => ({
        id,
        name,
      }));
      setGenres(genreList);
    }
    loadGenres();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilterChange(updated);
  }

  return (
    <div className={styles.filters}>
      {/* Year Filter */}
      <select name="year" value={filters.year} onChange={handleChange}>
        <option value="">All Years</option>
        {Array.from({ length: 30 }, (_, i) => {
          const y = new Date().getFullYear() - i;
          return (
            <option key={y} value={y}>
              {y}
            </option>
          );
        })}
      </select>
      {/* Genre Filter */}
      <select name="genre" value={filters.genre} onChange={handleChange}>
        <option value="">All Genres</option>
        {genres.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {/* Country Filter */}
      <select name="country" value={filters.country} onChange={handleChange}>
        <option value="">All Countries</option>
        <option value="GB">United Kingdom</option>
        <option value="US">United States</option>
        <option value="FR">France</option>
        <option value="JP">Japan</option>
        <option value="IN">India</option>
      </select>
    </div>
  );
}

export default Filter;
