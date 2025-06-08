import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header>
        <div className={`container ${styles.container}`}>
          {/* Logo */}
          <a href="/">
            <img src="src/assets/images/logo.png" alt="HiMovies Logo" className={styles.headerLogo} />
          </a>
          {/* Site Navigation */}
          <nav className={styles.headerNav}>
            <a href="/">Home</a>
            <a href="/movies">Movies</a>
            <a href="/tv-shows">TV Shows</a>
            <a href="/top-imdb">Top IMDB</a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
