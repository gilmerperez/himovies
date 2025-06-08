import styles from "./Movies.module.css";

function Movies() {
  return (
    <>
      <head>
        <title>HiMovies | Movies</title>
      </head>

      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Movies</h1>
        </div>
      </main>
    </>
  );
}

export default Movies;
