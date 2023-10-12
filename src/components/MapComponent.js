import React, { useEffect, useState } from "react";
import Map from "react-map-gl";
import { Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ServerError from "./ServerError";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapComponent({ initialViewState, mapStyle }) {
  const [location, setLocation] = useState(null);
  const [mapRef, setMapRef] = useState(null);

  useEffect(() => {
    // Try to get user's location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    });
  }, []);

  useEffect(() => {
    if (location && mapRef) {
      // Add marker to map at user's location
      new Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(mapRef.getMap());
    }
  }, [location, mapRef]);

  return MAPBOX_TOKEN ? (
    <Map
      ref={setMapRef}
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
