import React, { useEffect, useState, useRef } from "react";
import Map from "react-map-gl";
import { Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ServerError from "./ServerError";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapComponent({ initialViewState, mapStyle, location }) {
  const [mapRef, setMapRef] = useState();
  const markerRef = useRef(null);

  useEffect(() => {
    if (location && mapRef) {
      if (markerRef.current) {
        markerRef.current.remove();
      }
      // Add a marker to the map at the user's location
      markerRef.current = new Marker()
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
          mapRef.flyTo({
            center: [location.longitude, location.latitude],
            zoom: 9,
          })
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
