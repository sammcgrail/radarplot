import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/">
          <div className={styles.logo}></div>
        </NavLink>
        <div className={styles.headerItems}>
          <ul>
            <li>
              <NavLink to="/">NOAA / MAPBOX</NavLink>
            </li>
            <li>
              <NavLink to="/weather">OPENWEATHER</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
