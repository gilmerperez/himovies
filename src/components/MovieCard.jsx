import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  return (
    <>
      <div className={styles.movieCard}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
        <div className={styles.movieCardContent}>
          <h2 className={styles.movieTitle}>{movie.title}</h2>
          <h3 className={styles.movieYear}>{movie.release_date?.split("-")[0]}</h3>
          <h3 className={styles.movieRating}>{movie.adult ? "18+" : "PG"}</h3>
          <h3 className={styles.movieLength}>{movie.vote_average}</h3>
          <h3 className={styles.movieGenre}>{movie.genre_ids.join(", ")}</h3>
          <p className={styles.movieDescription}>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
