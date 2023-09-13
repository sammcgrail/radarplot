import React from "react";

import { LocationProvider } from "../contexts/LocationContext";

import Card from "../components/Card";
import TodayWeather from "../components/TodayWeather";

import styles from "../styles/WeatherPage.module.css";

export default function WeatherPage() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.page}>
        <LocationProvider>
          <Card className={styles.card}>
            <TodayWeather />
          </Card>
        </LocationProvider>
      </div>
    </>
  );
}
