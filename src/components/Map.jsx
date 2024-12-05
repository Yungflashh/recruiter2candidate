import  { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

import PropTypes from "prop-types";

const MapComponent = ({ destination }) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error("Error fetching location:", error);
      },
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <MapContainer
      style={{ height: "900px", width: "100%" }}
      center={userLocation || [0, 0]} 
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userLocation && <Marker position={userLocation} icon={L.icon({ iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", iconAnchor: [12, 41] })} />}
      {destination && userLocation && (
        <Polyline positions={[userLocation, destination]} color="blue" />
      )}
    </MapContainer>
  );
};

export default MapComponent;


MapComponent.propTypes = {
    destination : PropTypes.array
}

