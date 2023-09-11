import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RadarPage from "./RadarPage";
import WeatherPage from "./WeatherPage";

const NOAA_API_BASE_URL = "/cdo-web/api/v2/locations";
const NOAA_TOKEN = process.env.REACT_APP_NOAA_TOKEN;

const fetchRadarData = async () => {
  console.log(`Fetching data from: ${NOAA_API_BASE_URL}`);

  const response = await fetch(NOAA_API_BASE_URL, {
    headers: {
      token: NOAA_TOKEN,
    },
  });
  if (response.redirected) {
    throw new Error("Request was redirected. Possible authentication issue.");
  }
  if (!response.ok) {
    const text = await response.text();
    console.error("Error response:", text);
    throw new Error(`HTTP error! Status: ${response.status}, Body: ${text}`);
  }

  return await response.json();
};

function App() {
  const [radarData, setRadarData] = useState([]);

  useEffect(() => {
    let isMounted = true; // track mounting status

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
      isMounted = false; // cleanup on unmounting
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RadarPage data={radarData} />} />
          <Route path="/weather" element={<WeatherPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
