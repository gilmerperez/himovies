import { Link } from "react-router-dom";
import styles from "./TVShowCard.module.css";

function TVShowCard({ show }) {
  const { id, name, first_air_date, number_of_seasons, genre_names, overview, poster_path } = show;

  return (
    <>
      <Link to={`/tv-show/${id}`} className={styles.tvCardLink}>
        <div className={styles.tvCard}>
          {/* TV Show Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${name} Poster`}
            className={styles.tvPoster}
          />
          <div className={styles.tvCardContent}>
            {/* Title */}
            <h2 className={styles.tvTitle}>{name}</h2>
            <div className={styles.tvMeta}>
              {/* Year */}
              <h3 className={styles.tvYear}>{first_air_date?.split("-")[0]}</h3>
              {/* Seasons */}
              <h3 className={styles.tvSeasons}>
                {number_of_seasons} Season{number_of_seasons !== 1 ? "s" : ""}
              </h3>
            </div>
            {/* Genres */}
            <h3 className={styles.tvGenre}>{genre_names.join(" / ")}</h3>
            {/* Description */}
            <p className={styles.tvDescription}>{overview}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TVShowCard;
