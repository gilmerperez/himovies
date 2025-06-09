import styles from "./TopIMDB.module.css";

function TopIMDB() {
  return (
    <>
      <title>HiMovies | Top IMDB</title>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Top IMDB</h1>
        </div>
      </main>
    </>
  );
}

export default TopIMDB;
