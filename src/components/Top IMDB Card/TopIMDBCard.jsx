import { Link } from "react-router-dom";
import styles from "./TopIMDBCard.module.css";

function TopIMDBCard({ movie }) {
  const { id, poster_path, title, release_date, certification, genre_names, overview, runtime } = movie;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <>
      <Link to={`/movie/${id}`} className={styles.movieCardLink}>
        <div className={styles.topIMDBCard}>
          {/* Top IMDB Poster */}
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${movie.title} Poster`} />
          <div className={styles.topIMDBCardContent}>
            {/* Top IMDB Title */}
            <h2 className={styles.topIMDBTitle}>{title}</h2>
            <div className={styles.topIMDBMeta}>
              {/* Top IMDB Release Date */}
              <h3 className={styles.topIMDBYear}>{release_date?.split("-")[0]}</h3>
              {/* Top IMDB Rating */}
              <h3 className={styles.topIMDBRating}>{certification}</h3>
              {/* Top IMDB Length */}
              <h3 className={styles.topIMDBLength}>
                {hours > 0 ? `${hours}h ` : ""}
                {minutes}m
              </h3>
            </div>
            {/* Top IMDB Genres */}
            <h3 className={styles.topIMDBGenre}>{genre_names.join(" / ")}</h3>
            {/* Top IMDB Description */}
            <p className={styles.topIMDBDescription}>{overview}</p>
            {/* Top IMDB Audience Rating */}
          </div>
        </div>
      </Link>
    </>
  );
}

export default TopIMDBCard;
