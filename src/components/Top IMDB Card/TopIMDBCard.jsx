import { Link } from "react-router-dom";
import styles from "./TopIMDBCard.module.css";

function TopIMDBCard({ movie }) {
  const { id, poster_path, title, release_date, certification, genre_names, overview, runtime } = movie;

  // Calculate hours and minutes from runtime
  const minutes = runtime % 60;
  const hours = Math.floor(runtime / 60);

  return (
    <>
      <Link to={`/movie/${id}`} className={styles.movieCardLink}>
        <div className={styles.topIMDBCard}>
          {/* Top IMDB Poster */}
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title || "Movie"} Poster`} />
          <div className={styles.topIMDBCardContent}>
            {/* Top IMDB Title */}
            <h2 className={styles.topIMDBTitle}>{title}</h2>
            {/* Top IMDB Metadata: Year, Certification, Runtime */}
            <div className={styles.topIMDBMeta}>
              <h3 className={styles.topIMDBYear}>{release_date?.split("-")[0]}</h3>
              <h3 className={styles.topIMDBRating}>{certification || "N/A"}</h3>
              <h3 className={styles.topIMDBLength}>
                {hours > 0 ? `${hours}h ` : ""}
                {minutes}m
              </h3>
            </div>
            {/* Top IMDB Genres */}
            <h3 className={styles.topIMDBGenre}>
              {genre_names?.length ? genre_names.join(" / ") : "No genres available"}
            </h3>
            {/* Top IMDB Description */}
            <p className={styles.topIMDBDescription}>{overview}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TopIMDBCard;
