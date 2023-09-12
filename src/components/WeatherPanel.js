import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const NOAA_API_BASE_URL = "/cdo-web/api/v2/locations";
const NOAA_TOKEN = process.env.REACT_APP_NOAA_TOKEN;

const fetchRadarData = async () => {
  const response = await fetch(NOAA_API_BASE_URL, {
    headers: {
      token: NOAA_TOKEN,
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Body: ${text}`);
  }

  return await response.json();
};

function WeatherPanel() {
  const [radarData, setRadarData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const radarData = await fetchRadarData();
        if (isMounted) {
          setRadarData(radarData.results);
        }
      } catch (error) {
        console.error("Error fetching radar data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h2>Radar Data</h2>
      <p>We've fetched some radar data!</p>
      {radarData.length ? (
        <ul>
          {radarData.map((item) => (
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
  );
}

export default WeatherPanel;
