import React, { createContext, useContext, useEffect, useState } from "react";

import LoadingSpinner from "../components/LoadingSpinner";
import ServerError from "../components/ServerError";

import fetchData from "../helpers/fetchData";
import Card from "../components/Card";

const defaultLocationContext = { locationData: {}, weatherData: {} };

const OPEN_API_BASE_URL = "https://api.openweathermap.org/data/2.5/onecall";
const OPEN_API_GEO_URL = "https://api.openweathermap.org/geo/1.0/reverse";
const OPEN_API_KEY = process.env.REACT_APP_OPEN_TOKEN;

export const LocationContext = createContext(defaultLocationContext);

export function LocationProvider({ children }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchAll = async (lat, lon) => {
      try {
        if (!OPEN_API_KEY) {
          throw new Error("'REACT_APP_OPEN_TOKEN' must be defined in .env.local")
        }
        // fetch location data
        await fetchData(
          `${OPEN_API_GEO_URL}?lat=${lat}&lon=${lon}&appid=${OPEN_API_KEY}`,
          locationData,
          setLocationData
        );
        // fetch weather data
        await fetchData(
          `${OPEN_API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${OPEN_API_KEY}&units=imperial&exclude=minutely`,
          weatherData,
          setWeatherData
        );
      } catch (error) {
        setError(error?.message)
      } finally {
        setLoading(false);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        await fetchAll(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [locationData, weatherData]);
  return (
    <>
      {!loading ? (
        locationData && weatherData ? (
          <LocationContext.Provider value={{ locationData, weatherData }}>
            {children}
          </LocationContext.Provider>
        ) : (
          <Card>
            <ServerError errorSource="OpenWeather" error={error} />
          </Card>
        )
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

export function useLocation() {
  if (!LocationContext) {
    throw new Error("LocationContext must be defined in a parent component");
  }
  return useContext(LocationContext);
}
