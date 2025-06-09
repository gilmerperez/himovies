import styles from "./MovieCard.module.css";

function MovieCard() {
  return (
    <>
      <div className={styles.movieCard}>
        <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
        <div className={styles.movieCardContent}>
          <h2 className={styles.movieTitle}>Alien: Romulus</h2>
          <h3 className={styles.movieYear}>2024</h3>
          <h3 className={styles.movieRating}>R</h3>
          <h3 className={styles.movieLength}>1h 59m</h3>
          <h3 className={styles.movieGenre}>Horror / Sci-fi</h3>
          <p className={styles.movieDescription}>
            Space colonizers come face to face with the most terrifying life-form in the universe while scavenging the
            deep ends of a derelict space station.
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
