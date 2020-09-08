import React from "react";

import styles from "../../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="Logo" />
        <input type="checkbox" id="hamburger-checkbox" />

        <div className={styles.pageFader} />

        <label className={styles.hamburger} htmlFor="hamburger-checkbox">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </label>
        <nav>
          <a href="#">Features</a>
          <a href="#">Team</a>
          <a href="#">Sign In</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
