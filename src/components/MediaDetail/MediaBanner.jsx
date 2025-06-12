import styles from "./MediaBanner.module.css";

function MediaBanner({ backdropPath, title }) {
  const backdropUrl = backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : "";

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${backdropUrl})` }}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}

export default MediaBanner;
