import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";
import WeatherPanel from "../components/WeatherPanel";
import styles from "../styles/RadarPage.module.css";

function RadarPage() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    // Try to get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation((prevLocation) => ({
          ...prevLocation,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 9,
        }));
      },
      (error) => {
        console.error("Error getting user's location:", error);
        setLocation((prevLocation) => ({
          ...prevLocation,
          latitude: 42.3551,
          longitude: -71.0657,
          zoom: 9,
        }));
      }
    );
  }, []);

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.contentContainer}>
        <div className={styles.locationsContainer}>
          <WeatherPanel />
        </div>
        <div>
          {location.latitude && location.longitude && (
            <div className={styles.mapContainer}>
              <MapComponent
                initialViewState={location}
                mapStyle="mapbox://styles/mapbox/dark-v11"
                location={location}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RadarPage;
