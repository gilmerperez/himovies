import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        {/* Navigation Links */}
        <nav className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </nav>
        {/* Legal Disclaimer */}
        <p className={styles.description}>
          Movix is a Movie and TV Show database. It does not host, stream, or distribute any copyrighted content. All
          metadata and media previews are provided via public APIs. No user accounts, payments, or downloads are
          required.
        </p>
        {/* Copyright */}
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Movix</p>
      </div>
    </footer>
  );
}

export default Footer;
