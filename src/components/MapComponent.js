import React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
if (MAPBOX_TOKEN == null || MAPBOX_TOKEN === "") {
  throw new Error(
    `'REACT_APP_MAPBOX_ACCESS_TOKEN' must be defined in .env.local.`
  );
}

function MapComponent({ initialViewState, mapStyle }) {
  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={initialViewState}
      style={{ width: 900, height: 700 }}
      mapStyle={mapStyle}
    />
  );
}

export default MapComponent;
