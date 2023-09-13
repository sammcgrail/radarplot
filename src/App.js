import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RadarPage from "./pages/RadarPage";
import WeatherPage from "./pages/WeatherPage";

import Header from "./components/Header";
import RadarPage from "./RadarPage";
import WeatherPage from "./WeatherPage";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<RadarPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
