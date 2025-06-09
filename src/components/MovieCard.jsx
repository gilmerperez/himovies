import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <>
      <div className={styles.movieCard}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
        <div className={styles.movieCardContent}>
          <h2 className={styles.movieTitle}>{movie.title}</h2>
          <div className={styles.movieMeta}>
            <h3 className={styles.movieYear}>{movie.release_date?.split("-")[0]}</h3>
            <h3 className={styles.movieRating}>{movie.certification}</h3>
            <h3 className={styles.movieLength}>
              {hours > 0 ? `${hours}h ` : ""}
              {minutes}m
            </h3>
          </div>
          <h3 className={styles.movieGenre}>{movie.genre_names.join(" / ")}</h3>
          <p className={styles.movieDescription}>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
