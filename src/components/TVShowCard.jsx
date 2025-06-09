import styles from "./TVShowCard.module.css";

function TVShowCard({ show }) {
  return (
    <>
      <div className={styles.tvCard}>
        {/* TV Show Poster */}
        <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={`${show.name} Poster`} />
        <div className={styles.tvCardContent}>
          {/* TV Show Title */}
          <h2 className={styles.tvTitle}>{show.name}</h2>
          <div className={styles.tvMeta}>
            {/* TV Show Releae Date */}
            <h3 className={styles.tvYear}>{show.first_air_date?.split("-")[0]}</h3>
            {/* TV Show Season Count */}
            <h3 className={styles.tvSeasons}>
              {show.number_of_seasons} Season{show.number_of_seasons !== 1 ? "s" : ""}
            </h3>
          </div>
          {/* TV Show Genres */}
          <h3 className={styles.tvGenre}>{show.genre_names.join(" / ")}</h3>
          {/* TV Show Description */}
          <p className={styles.tvDescription}>{show.overview}</p>
        </div>
      </div>
    </>
  );
}

export default TVShowCard;
