import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CatchAllPage from "./pages/CatchAllPage";
import RadarPage from "./pages/RadarPage";
import WeatherPage from "./pages/WeatherPage";

import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<RadarPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="*" element={<CatchAllPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
