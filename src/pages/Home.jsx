import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Logo */}
          <img src="src/assets/images/logo.png" alt="Movix Logo" className={styles.logo} />
          {/* Heading */}
          <h1 className={styles.heading}>Movix</h1>
          {/* Search Bar */}
          <section className={styles.searchBar}>
            <input type="text" placeholder="Enter Keywords..." />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </section>
          {/* Social Links */}
          <section className={styles.socialLinks}>
            <a href="https://www.facebook.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.facebookSocialLink}`}>
                <i class="fa-brands fa-facebook-f"></i>
                <p>3.07B</p>
              </div>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.whatsappSocialLink}`}>
                <i className="fa-brands fa-whatsapp"></i>
                <p>3B</p>
              </div>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.youtubeSocialLink}`}>
                <i className="fa-brands fa-youtube"></i>
                <p>2.7B</p>
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.instagramSocialLink}`}>
                <i className="fa-brands fa-instagram"></i>
                <p>2B</p>
              </div>
            </a>
            <a href="https://www.tiktok.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.tiktokSocialLink}`}>
                <i className="fa-brands fa-tiktok"></i>
                <p>1.84B</p>
              </div>
            </a>

            <a href="https://www.snapchat.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.snapchatSocialLink}`}>
                <i className="fa-brands fa-snapchat"></i>
                <p>850M</p>
              </div>
            </a>
            <a href="https://www.reddit.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.redditSocialLink}`}>
                <i className="fa-brands fa-reddit-alien"></i>
                <p>712M</p>
              </div>
            </a>
            <a href="https://www.x.com/">
              <div className={`${styles.socialLink} ${styles.xSocialLink}`} target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
                <p>563M</p>
              </div>
            </a>
          </section>
          {/* Informational Text */}
          <section className={styles.informationalText}>
            <p className={styles.description}>
              Discover movies and TV shows with Movix, your go-to platform for exploring the latest releases, trailers,
              ratings, and more. Built as a modern media database, Movix helps you stay updated on what's new, what's
              trending, and what's worth watching.
            </p>
            <p className={styles.subheading}>What is Movix?</p>
            <p className={styles.text}>
              Movix is a modern movie and TV show discovery platform. Launched as a personal project, it allows users to
              browse the latest releases, view trailers, explore cast and crew details, and keep track of trending
              titles — all in a clean, responsive interface.
            </p>
            <p className={styles.subheading}>Is there a mobile or TV app?</p>
            <p className={styles.text}>
              While there is no dedicated mobile or TV app at the moment, this site is fully responsive and optimized
              for all devices — including phones, tablets, and smart TVs via web browsers.
            </p>
            <p className={styles.subheading}>Looking for streaming options?</p>
            <p className={styles.text}>
              This site does not offer direct streaming. However, trailers and official content may be embedded from
              platforms like YouTube. If you're interested in watching a film or show, we recommend checking licensed
              providers like Netflix, Hulu, Prime Video, or Disney+.
            </p>
            <p className={styles.subheading}>Is Movix safe?</p>
            <p className={styles.text}>
              Yes. Movix is completely ad-free, does not require logins, and does not track or store personal user data.
              Movix is hosted securely and intended purely for browsing and learning about movies and TV shows.
            </p>
          </section>
          {/* Review Text */}
          <section className={styles.reviewText}>
            <p className={styles.description}>
              Although Movix began as a personal project, it has grown into a fully responsive movie and TV show
              discovery app used by film fans to explore new releases, watch trailers, and view detailed metadata — all
              in one clean, ad-free interface.
            </p>
            <p className={styles.subheading}>Device Compatibility</p>
            <p className={styles.text}>
              Movix is optimized for desktops, tablets, smartphones, and even smart TVs with modern browsers. Whether
              you're at home or on the go, you'll enjoy a consistent and responsive experience.
            </p>

            <p className={styles.subheading}>No Account Required</p>
            <p className={styles.text}>
              You can browse all content without creating an account or logging in. The focus is on open access to
              public movie and TV show data without unnecessary barriers.
            </p>

            <p className={styles.subheading}>Regular Updates</p>
            <p className={styles.text}>
              Movix pulls live data from The Movie Database (TMDB) API, ensuring access to the most up-to-date
              information about newly released movies, upcoming titles, trending shows, and more.
            </p>

            <p className={styles.subheading}>Browsing Experience</p>
            <p className={styles.text}>
              The UI is designed to be clean, distraction-free, and easy to navigate. No popups, no intrusive ads — just
              seamless access to trailers, summaries, genres, cast info, and more.
            </p>

            <p className={styles.subheading}>Media Quality</p>
            <p className={styles.text}>
              Where available, official trailers and media previews are embedded in HD from trusted sources like
              YouTube. Poster art, backdrops, and images are delivered through TMDB's high-resolution image endpoints.
            </p>

            <p className={styles.subheading}>Privacy & Safety</p>
            <p className={styles.text}>
              Movix does not collect user data or serve third-party ads. All requests are read-only, and the app runs
              entirely in your browser. You are free to explore safely without tracking or popups.
            </p>

            <p className={styles.subheading}>No Ads or Popups</p>
            <p className={styles.text}>
              Movix is completely ad-free and will remain so. It is built for learning, portfolio showcasing, and media
              discovery only — not monetization.
            </p>

            <p className={styles.subheading}>Project Feedback</p>
            <p className={styles.text}>
              Feedback is always welcome. If you encounter bugs, UX issues, or have ideas for features, feel free to
              reach out.
            </p>

            <p className={styles.subheading}>User-Friendly Design</p>
            <p className={styles.text}>
              With intuitive search, categorized filtering, and clean layout, Movix makes it easy to find what you're
              looking for — whether it's a blockbuster, hidden gem, or upcoming release.
            </p>

            <p className={styles.subheading}>Rich Media Database</p>
            <p className={styles.text}>
              Browse a wide range of movie and TV show data including release dates, genres, trailers, ratings, cast and
              crew, and user reviews. Multi-language support is included for international content where available.
            </p>
          </section>

          {/* Go to Movix Button */}
          <a href="/movies">
            <button className={styles.viewMovies}>View Movies</button>
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;
