import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className={`container ${styles.container}`}>
          {/* Logo */}
          <NavLink to="/" className={styles.headerLogoLink}>
            <img src={logo} alt="Movix Logo" className={styles.headerLogo} />
          </NavLink>
          {/* Site Navigation */}
          <nav className={styles.headerNav}>
            <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.activeLink}` : undefined)} end>
              Home
            </NavLink>
            <NavLink to="/movies" className={({ isActive }) => (isActive ? `${styles.activeLink}` : undefined)}>
              Movies
            </NavLink>
            <NavLink to="/tv-shows" className={({ isActive }) => (isActive ? `${styles.activeLink}` : undefined)}>
              TV Shows
            </NavLink>
            <NavLink to="/top-imdb" className={({ isActive }) => (isActive ? `${styles.activeLink}` : undefined)}>
              Top IMDB
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
