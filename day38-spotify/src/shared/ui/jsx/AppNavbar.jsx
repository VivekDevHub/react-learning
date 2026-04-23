import React from "react";
import { useSelector } from "react-redux";
import styles from "../css/AppNavbar.module.css";
import Logo from "./Logo";

const AppNavbar = ({ searchValue = "", onSearchChange = () => {} }) => {
  const logUser = useSelector((state) => state.userReducer.logUser);
  const initial = logUser?.name ? logUser.name.charAt(0).toUpperCase() : "U";

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <button type="button" className={styles.brandBtn} aria-label="Spotify">
          <Logo color="white" className={styles.brandLogo} />
        </button>
        <button type="button" className={styles.circleBtn} aria-label="Home">
          <span className={styles.iconGlyph}>⌂</span>
        </button>
      </div>

      <div className={styles.middle}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            type="text"
            placeholder="What do you want to play?"
            className={styles.searchInput}
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <span className={styles.searchTail}>▭</span>
        </div>
      </div>

      <div className={styles.right}>
        <button type="button" className={styles.premiumBtn}>
          Explore Premium
        </button>
        <button type="button" className={styles.installBtn}>
          <span className={styles.installIcon}>⇩</span>
          Install App
        </button>
        <button type="button" className={styles.utilityBtn} aria-label="Notifications">
          ◌
        </button>
        <button type="button" className={styles.utilityBtn} aria-label="Friends">
          ♡
        </button>
        <div className={styles.avatar}>{initial}</div>
      </div>
    </header>
  );
};

export default AppNavbar;
