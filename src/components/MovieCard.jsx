import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const minutes = movie.runtime % 60;
  const hours = Math.floor(movie.runtime / 60);

  return (
    <>
      <Link to={`/movie/${movie.id}`} className={styles.movieCardLink}>
        <div className={styles.movieCard}>
          {/* Movie Poster */}
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
          <div className={styles.movieCardContent}>
            {/* Movie Title */}
            <h2 className={styles.movieTitle}>{movie.title}</h2>
            <div className={styles.movieMeta}>
              {/* Movie Release Date */}
              <h3 className={styles.movieYear}>{movie.release_date?.split("-")[0]}</h3>
              {/* Movie Rating */}
              <h3 className={styles.movieRating}>{movie.certification}</h3>
              {/* Movie Length */}
              <h3 className={styles.movieLength}>
                {hours > 0 ? `${hours}h ` : ""}
                {minutes}m
              </h3>
            </div>
            {/* Movie Genres */}
            <h3 className={styles.movieGenre}>{movie.genre_names.join(" / ")}</h3>
            {/* Movie Description */}
            <p className={styles.movieDescription}>{movie.overview}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
