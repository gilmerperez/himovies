import styles from "./TVShows.module.css";

function TVShows() {
  return (
    <>
      <head>
        <title>HiMovies | TV Shows</title>
      </head>

      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>TV Shows</h1>
        </div>
      </main>
    </>
  );
}

export default TVShows;
