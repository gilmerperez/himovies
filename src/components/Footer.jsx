import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <div className={`container ${styles.container}`}>
          {/* Navigation Links */}
          <nav className={styles.footerLinks}>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/terms-of-service">Terms of Service</a>
          </nav>
          {/* Legal Disclaimer */}
          <p className={styles.footerDescription}>
            HiMovies is a free movie streaming site with zero ads. We let you watch movies online without having to pay
            or register. With over 10,000 movies and TV series. You can also download full movies and watch them later.
          </p>
          {/* Copyright */}
          <p className={styles.footerCopyright}>© 2025 HiMovies</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
