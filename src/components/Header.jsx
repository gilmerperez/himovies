import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header>
        <div className={styles.container}>
          {/* Logo */}
          <a href="/" className={styles.headerLogo}>
            <img src="src/assets/images/logo.png" alt="HiMovies Logo" />
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
