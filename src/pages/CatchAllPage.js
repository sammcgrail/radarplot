import React from "react";
import { NavLink } from "react-router-dom";

import Card from "../components/Card";

import styles from "../styles/CatchAllPage.module.css";

export default function WeatherPage() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.page}>
        <Card>
          <h2>404</h2>
          <p>
            Seems you got lost somewhere. Try <NavLink to="/">here.</NavLink>
          </p>
        </Card>
      </div>
    </>
  );
}
