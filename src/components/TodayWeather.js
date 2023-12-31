import React from "react";
import { useLocation } from "../contexts/LocationContext";
import getDateString from "../helpers/getDateString";

import styles from "../styles/TodayWeather.module.css";
import LineChart from "./LineChart";

const OPEN_API_EMOJI_URL = "http://openweathermap.org/img/wn/";

export default function TodayWeather() {
  const { locationData, weatherData } = useLocation();
  const { country, name, state } = locationData[0];

  const nextDayHours = weatherData?.hourly?.slice(0, 25);
  // this should probably be memoized or something, but w/e
  const chartData = nextDayHours
    ? {
        labels: nextDayHours?.map(
          (hour) => getDateString(hour.dt)?.split(" at ")[1]
        ),
        datasets: [
          {
            data: nextDayHours?.map((hour) => hour.temp),
            backgroundColor: "rgba(180, 0, 255, 0.8)",
            borderColor: "#000",
          },
        ],
      }
    : null;

  return (
    <>
      <h2>{getDateString(weatherData?.hourly[0]?.dt)?.split(" at ")[0]}</h2>
      <h3>
        {name}, {state} {country}
      </h3>
      {chartData && <LineChart data={chartData} />}
      <ul className={styles.timeList}>
        {nextDayHours?.map((hour, i) => {
          const dateTime = getDateString(hour.dt);
          const timeString = dateTime?.split(" at ")[1];
          const emoji = `${OPEN_API_EMOJI_URL}${hour.weather[0].icon}.png`;
          return (
            <div key={`weather-hour-${i}`} className={styles.timeEntry}>
              <p>{timeString}</p>
              <p>{hour.temp}F</p>
              <p>{hour.weather[0].description}</p>
              <p>
                <img
                  id="weather-icon"
                  src={emoji}
                  alt=""
                  title={hour.weather[0].description}
                />
              </p>
            </div>
          );
        })}
      </ul>
    </>
  );
}
