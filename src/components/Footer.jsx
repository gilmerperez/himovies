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
            This website is a non-commercial Movie and TV Show database. It does not host, stream, or distribute any
            copyrighted content. All metadata and media previews are provided via public APIs such as TMDB. No user
            accounts, payments, or downloads are required.
          </p>
          {/* Copyright */}
          <p className={styles.footerCopyright}>© {new Date().getFullYear()} Movix</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
