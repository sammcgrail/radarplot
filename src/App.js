import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RadarPage from "./RadarPage";

const NOAA_API_BASE_URL = "/cdo-web/api/v2/locations"; // Replace with the actual NOAA endpoint you're using
const NOAA_TOKEN = process.env.REACT_APP_NOAA_TOKEN;

const fetchRadarData = async () => {
  const response = await fetch(NOAA_API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${NOAA_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Received non-JSON response.");
  }

  return await response.json();
};

function App() {
  useEffect(() => {
    let isMounted = true; // track mounting status

    const fetchData = async () => {
      try {
        const radarData = await fetchRadarData();
        if (isMounted) {
          console.log(radarData);
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
          <Route path="/" element={<RadarPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
