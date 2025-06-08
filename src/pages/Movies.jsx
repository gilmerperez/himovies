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
          {/* Search Bar */}
          <section className={styles.searchBar}>
            <input type="text" placeholder="Enter Keywords..." />
            <button>
              <i class="fa-solid fa-film"></i>
            </button>
          </section>
          {/* Movie Cards */}
          <section className={styles.movieCards}>
            <div className={styles.movieCard}>
              <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
              <div className={styles.movieCardContent}>
                <h2 className={styles.movieTitle}>Alien: Romulus</h2>
                <h3 className={styles.movieYear}>2024</h3>
                <h3 className={styles.movieRating}>R</h3>
                <h3 className={styles.movieLength}>1h 59m</h3>
                <p className={styles.movieDescription}>
                  Space colonizers come face to face with the most terrifying life-form in the universe while scavenging
                  the deep ends of a derelict space station.
                </p>
              </div>
            </div>
            <div className={styles.movieCard}>
              <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
              <div className={styles.movieCardContent}>
                <h2 className={styles.movieTitle}>Alien: Romulus</h2>
                <h3 className={styles.movieYear}>2024</h3>
                <h3 className={styles.movieRating}>R</h3>
                <h3 className={styles.movieLength}>1h 59m</h3>
                <p className={styles.movieDescription}>
                  Space colonizers come face to face with the most terrifying life-form in the universe while scavenging
                  the deep ends of a derelict space station.
                </p>
              </div>
            </div>
            <div className={styles.movieCard}>
              <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
              <div className={styles.movieCardContent}>
                <h2 className={styles.movieTitle}>Alien: Romulus</h2>
                <h3 className={styles.movieYear}>2024</h3>
                <h3 className={styles.movieRating}>R</h3>
                <h3 className={styles.movieLength}>1h 59m</h3>
                <p className={styles.movieDescription}>
                  Space colonizers come face to face with the most terrifying life-form in the universe while scavenging
                  the deep ends of a derelict space station.
                </p>
              </div>
            </div>
            <div className={styles.movieCard}>
              <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
              <div className={styles.movieCardContent}>
                <h2 className={styles.movieTitle}>Alien: Romulus</h2>
                <h3 className={styles.movieYear}>2024</h3>
                <h3 className={styles.movieRating}>R</h3>
                <h3 className={styles.movieLength}>1h 59m</h3>
                <p className={styles.movieDescription}>
                  Space colonizers come face to face with the most terrifying life-form in the universe while scavenging
                  the deep ends of a derelict space station.
                </p>
              </div>
            </div>
            <div className={styles.movieCard}>
              <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
              <div className={styles.movieCardContent}>
                <h2 className={styles.movieTitle}>Alien: Romulus</h2>
                <h3 className={styles.movieYear}>2024</h3>
                <h3 className={styles.movieRating}>R</h3>
                <h3 className={styles.movieLength}>1h 59m</h3>
                <p className={styles.movieDescription}>
                  Space colonizers come face to face with the most terrifying life-form in the universe while scavenging
                  the deep ends of a derelict space station.
                </p>
              </div>
            </div>
            <div className={styles.movieCard}>
              <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
              <div className={styles.movieCardContent}>
                <h2 className={styles.movieTitle}>Alien: Romulus</h2>
                <h3 className={styles.movieYear}>2024</h3>
                <h3 className={styles.movieRating}>R</h3>
                <h3 className={styles.movieLength}>1h 59m</h3>
                <p className={styles.movieDescription}>
                  Space colonizers come face to face with the most terrifying life-form in the universe while scavenging
                  the deep ends of a derelict space station.
                </p>
              </div>
            </div>
            <div className={styles.movieCard}>
              <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
              <div className={styles.movieCardContent}>
                <h2 className={styles.movieTitle}>Alien: Romulus</h2>
                <h3 className={styles.movieYear}>2024</h3>
                <h3 className={styles.movieRating}>R</h3>
                <h3 className={styles.movieLength}>1h 59m</h3>
                <p className={styles.movieDescription}>
                  Space colonizers come face to face with the most terrifying life-form in the universe while scavenging
                  the deep ends of a derelict space station.
                </p>
              </div>
            </div>
            <div className={styles.movieCard}>
              <img src="src/assets/images/alien-romulus-movie-poster.jpg" alt="Movie Name Poster" />
              <div className={styles.movieCardContent}>
                <h2 className={styles.movieTitle}>Alien: Romulus</h2>
                <h3 className={styles.movieYear}>2024</h3>
                <h3 className={styles.movieRating}>R</h3>
                <h3 className={styles.movieLength}>1h 59m</h3>
                <p className={styles.movieDescription}>
                  Space colonizers come face to face with the most terrifying life-form in the universe while scavenging
                  the deep ends of a derelict space station.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Movies;
