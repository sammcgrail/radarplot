import React from "react";

import styles from "./styles/RadarPage.module.css";

function RadarPage({ data }) {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.locationsContainer}>
        <h2>Radar Data</h2>
        <p>We've fetched some radar data!</p>
        {data.length ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>ID: {item.id}</p>
                <p>Data Coverage: {item.datacoverage}</p>
                <p>Max Date: {item.maxdate}</p>
                <p>Min Date: {item.mindate}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default RadarPage;
