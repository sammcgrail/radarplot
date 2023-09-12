import React from "react";
import MapComponent from "./components/MapComponent";
import LoadingSpinner from "./components/LoadingSpinner";

import styles from "./styles/RadarPage.module.css";

function RadarPage({ data }) {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.contentContainer}>
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
            <LoadingSpinner />
          )}
        </div>
        <div className={styles.mapContainer}>
          <MapComponent
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14,
            }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
          />
        </div>
      </div>
    </>
  );
}

export default RadarPage;
