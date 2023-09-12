import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.headerItems}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/weather">Hourly Weather</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
