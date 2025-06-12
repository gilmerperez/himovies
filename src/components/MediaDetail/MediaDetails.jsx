import styles from "./MediaDetails.module.css";

function MediaDetails({ media }) {
  const {
    poster_path,
    title,
    name,
    vote_average,
    vote_count,
    trailer_link,
    overview,
    release_date,
    first_air_date,
    genres,
    runtime,
    number_of_seasons,
    country,
    producers,
    directors,
  } = media;

  return (
    <div className={styles.details}>
      {/* Poster and Main Info */}
      <div className={styles.topSection}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={`${title || name} poster`}
          className={styles.poster}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{title || name}</h2>
          <p className={styles.rating}>
            {vote_average?.toFixed(1)}/10 ({vote_count.toLocaleString()} votes)
          </p>
          {trailer_link && (
            <a href={trailer_link} className={styles.trailerLink} target="_blank" rel="noopener noreferrer">
              ▶ Watch Trailer
            </a>
          )}
          <p className={styles.description}>{overview}</p>
        </div>
      </div>
      {/* Metadata */}
      <div className={styles.meta}>
        {release_date || first_air_date ? (
          <p>
            <strong>Release Date:</strong> {release_date || first_air_date}
          </p>
        ) : null}
        {genres?.length > 0 && (
          <p>
            <strong>Genres:</strong> {genres.join(", ")}
          </p>
        )}
        {runtime && (
          <p>
            <strong>Duration:</strong> {runtime} min
          </p>
        )}
        {number_of_seasons && (
          <p>
            <strong>Seasons:</strong> {number_of_seasons}
          </p>
        )}
        {country && (
          <p>
            <strong>Country:</strong> {country}
          </p>
        )}
        {directors?.length > 0 && (
          <p>
            <strong>Director(s):</strong> {directors.join(", ")}
          </p>
        )}
        {producers?.length > 0 && (
          <p>
            <strong>Producer(s):</strong> {producers.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}

export default MediaDetails;
