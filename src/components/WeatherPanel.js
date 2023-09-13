import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ServerError from "./ServerError";

const NOAA_API_BASE_URL = "/cdo-web/api/v2/locations";
const NOAA_TOKEN = process.env.REACT_APP_NOAA_TOKEN;

const fetchRadarData = async () => {
  if (!NOAA_TOKEN) {
    throw new Error("'REACT_APP_NOAA_TOKEN' must be defined in .env.local");
  }
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
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true; // track mounting status

    const fetchData = async () => {
      try {
        const radarData = await fetchRadarData();
        if (isMounted) {
          setRadarData(radarData.results);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // cleanup on unmounting
    };
  }, []);

  return (
    <div>
      {error ? (
        <ServerError errorSource="NOAA" error={error} />
      ) : radarData?.length ? (
        <>
          <h2>Radar Data</h2>
          <p>We've fetched some radar data!</p>
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
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default WeatherPanel;
