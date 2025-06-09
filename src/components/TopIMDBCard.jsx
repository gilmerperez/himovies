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
    <div className={styles.topIMDBCard}>
      {/* Top IMDB Poster */}
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
      <div className={styles.topIMDBCardContent}>
        {/* Top IMDB Title */}
        <h2 className={styles.topIMDBTitle}>{movie.title}</h2>
        <div className={styles.topIMDBMeta}>
          {/* Top IMDB Release Date */}
          <h3 className={styles.topIMDBYear}>{movie.release_date?.split("-")[0]}</h3>
          {/* Top IMDB Rating */}
          <h3 className={styles.topIMDBRating}>{movie.certification}</h3>
          {/* Top IMDB Length */}
          <h3 className={styles.topIMDBLength}>
            {hours > 0 ? `${hours}h ` : ""}
            {minutes}m
          </h3>
        </div>
        {/* Top IMDB Genres */}
        <h3 className={styles.topIMDBGenre}>{movie.genre_names.join(" / ")}</h3>
        {/* Top IMDB Description */}
        <p className={styles.topIMDBDescription}>{movie.overview}</p>
        {/* Top IMDB Audience Rating */}
        <h4 className={styles.audienceScore}>
          {movie.vote_average.toFixed(1)}/10 ({formatVoteCount(movie.vote_count)})
        </h4>
      </div>
    </div>
  );
}

export default TopIMDBCard;
