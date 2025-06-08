import styles from "./TopIMDB.module.css";

function TopIMDB() {
  return (
    <>
      <head>
        <title>HiMovies | Top IMDB</title>
      </head>

      <main>
        <div className={`container ${styles.container}`}>
          {/* Title */}
          <h1 className={styles.heading}>Top IMDB</h1>
        </div>
      </main>
    </>
  );
}

export default TopIMDB;
