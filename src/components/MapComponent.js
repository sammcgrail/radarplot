import React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ServerError from "./ServerError";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapComponent({ initialViewState, mapStyle }) {
  return MAPBOX_TOKEN ? (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={initialViewState}
      style={{ width: 800, height: 600 }}
      mapStyle={mapStyle}
    />
  ) : (
    <ServerError
      errorSource="MapBox"
      error="'REACT_APP_MAPBOX_ACCESS_TOKEN' must be defined in .env.local"
    />
  );
}

export default MapComponent;
