import React from "react";
import MapComponent from "./components/MapComponent";
import WeatherPanel from "./components/WeatherPanel";
import styles from "./styles/RadarPage.module.css";

function RadarPage() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.contentContainer}>
        <div className={styles.locationsContainer}>
          <WeatherPanel />
        </div>
        <div className={styles.mapContainer}>
          <MapComponent
            initialViewState={{
              latitude: 42.3551,
              longitude: -71.0657,
              zoom: 8,
            }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
          />
        </div>
      </div>
    </>
  );
}

export default RadarPage;
