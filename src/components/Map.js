import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
  const locationDot = L.icon({
    iconUrl: "icons/location_dot_icon.webp",
    iconSize: [15, 20],
  });

  return (
    <div className="h-80 p-5 w-1/2 sm:w-full">
      <MapContainer
        center={[45.0708, 4.84]}
        zoom={14}
        className="w-full h-full rounded-xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          minZoom={5}
        />
        <Marker position={[45.0708, 4.84]} icon={locationDot}>
          {/* <Popup offset={L.point(1, 7)}></Popup> */}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
