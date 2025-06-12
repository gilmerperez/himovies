import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const { id, poster_path, title, release_date, certification, genre_names, overview, runtime } = movie;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <Link to={`/movie/${id}`} className={styles.movieCardLink}>
      <div className={styles.movieCard}>
        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} Poster`}
          className={styles.moviePoster}
        />
        <div className={styles.movieCardContent}>
          {/* Movie Title */}
          <h2 className={styles.movieTitle}>{title}</h2>
          <div className={styles.movieMeta}>
            {/* Release Year */}
            <h3 className={styles.movieYear}>{release_date?.split("-")[0]}</h3>
            {/* Certification / Rating */}
            <h3 className={styles.movieRating}>{certification}</h3>
            {/* Formatted Movie Length */}
            <h3 className={styles.movieLength}>
              {hours > 0 ? `${hours}h ` : ""}
              {minutes}m
            </h3>
          </div>
          {/* Movie Genres */}
          <h3 className={styles.movieGenre}>{genre_names.join(" / ")}</h3>
          {/* Movie Description */}
          <p className={styles.movieDescription}>{overview}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
