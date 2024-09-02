import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";

const Map = () => {
  const locationDot = L.icon({
    iconUrl: "icons/location_dot_icon.webp",
    iconSize: [15, 20],
  });

  return (
    <Link>
      <section id="map">
        <div className="h-80 p-5">
          <MapContainer
            center={[45.0708, 4.84]}
            zoom={14}
            className="w-1/2 h-full rounded-xl"
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
      </section>
    </Link>
  );
};

export default Map;
