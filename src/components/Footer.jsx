import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <div className={`container ${styles.container}`}>
          {/* Navigation Links */}
          <nav className={styles.footerLinks}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </nav>
          {/* Legal Disclaimer */}
          <p className={styles.footerDescription}>
            Moviex is a non-commercial Movie and TV Show database. It does not host, stream, or distribute any
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
