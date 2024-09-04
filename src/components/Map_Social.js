import React from "react";
import Map from "./Map";
import Social from "./Social";

const Map_Social = () => {
  return (
    <section id="map" className="flex md:my-4 sm:flex-col">
      <Map />
      <Social />
    </section>
  );
};

export default Map_Social;
