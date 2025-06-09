import styles from "./TopIMDBCard.module.css";

function TopIMDBCard({ movie }) {
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  // Format vote count to abbreviated string
  const formatVoteCount = (count) => {
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
    if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K`;
    return count.toString();
  };

  return (
    <div className={styles.movieCard}>
      {/* Top IMDB Poster */}
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
      <div className={styles.movieCardContent}>
        {/* Top IMDB Title */}
        <h2 className={styles.movieTitle}>{movie.title}</h2>
        <div className={styles.movieMeta}>
          {/* Top IMDB Release Date */}
          <h3 className={styles.movieYear}>{movie.release_date?.split("-")[0]}</h3>
          {/* Top IMDB Rating */}
          <h3 className={styles.movieRating}>{movie.certification}</h3>
          {/* Top IMDB Length */}
          <h3 className={styles.movieLength}>
            {hours > 0 ? `${hours}h ` : ""}
            {minutes}m
          </h3>
        </div>
        {/* Top IMDB Genres */}
        <h3 className={styles.movieGenre}>{movie.genre_names.join(" / ")}</h3>
        {/* Top IMDB Description */}
        <p className={styles.movieDescription}>{movie.overview}</p>
        {/* Top IMDB Audience Rating */}
        <h4 className={styles.audienceScore}>
          {movie.vote_average.toFixed(1)}/10 ({formatVoteCount(movie.vote_count)})
        </h4>
      </div>
    </div>
  );
}

export default TopIMDBCard;
