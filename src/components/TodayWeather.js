import React from "react";
import { useLocation } from "../contexts/LocationContext";
import getDateString from "../helpers/getDateString";

import styles from "../styles/TodayWeather.module.css";

export default function TodayWeather() {
  const { locationData, weatherData } = useLocation();
  const { country, name, state } = locationData[0];

  return (
    <>
      <h2>{getDateString(weatherData?.hourly[0]?.dt)?.split(" at ")[0]}</h2>
      <h3>{name}, {state} {country}</h3>
      <ul>
        {weatherData?.hourly?.slice(0, 25).map((hour, i) => {
          const dateTime = getDateString(hour.dt);
          const timeString = dateTime?.split(" at ")[1];

          return (
            <li className={styles.timeList} key={`weather-hour-${i}`}>
              <p>
                {timeString}: {hour.temp}F {hour.weather[0].description}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
