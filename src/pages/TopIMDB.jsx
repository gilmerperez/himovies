import styles from "./TopIMDB.module.css";

function TopIMDB() {
  return (
    <>
      <title>HiMovies | Top Rated on IMDB</title>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Top Rated on IMDB</h1>
        </div>
      </main>
    </>
  );
}

export default TopIMDB;
