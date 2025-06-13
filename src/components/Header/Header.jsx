import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {/* Logo */}
        <NavLink to="/" className={styles.logoLink}>
          <img src={logo} alt="Movix Logo" className={styles.logo} />
        </NavLink>

        {/* Site Navigation */}
        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)} end>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Movies
          </NavLink>
          <NavLink to="/tv-shows" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            TV Shows
          </NavLink>
          <NavLink to="/top-imdb" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Top IMDB
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
