import React, { useEffect, useState } from "react";
import Map from "react-map-gl";
import { Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ServerError from "./ServerError";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapComponent({ initialViewState, mapStyle, location }) {
  const [mapRef, setMapRef] = useState();

  useEffect(() => {
    if (location && mapRef) {
      // Add a marker to the map at the user's location
      new Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(mapRef.getMap());
    }
  }, [location, mapRef]);

  return MAPBOX_TOKEN ? (
    <>
      <Map
        ref={setMapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={initialViewState}
        style={{ width: 800, height: 600 }}
        mapStyle={mapStyle}
      />
      <button
        onClick={() =>
          mapRef.setCenter([location.longitude, location.latitude])
        }
      >
        Center Map to My Location
      </button>
    </>
  ) : (
    <ServerError
      errorSource="MapBox"
      error="'REACT_APP_MAPBOX_ACCESS_TOKEN' must be defined in .env.local"
    />
  );
}

export default MapComponent;
