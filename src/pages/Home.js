import React, { useEffect, useState } from "react";
import TopSection from "../components/TopSection";
import ActivitySection from "../components/ActivitySection";
import axios from "axios";
import CarouselFramer from "../components/CarouselFramer";
import Map from "../components/Map";

const Home = () => {
  return (
    <div>
      <TopSection />
      <CarouselFramer />
      <ActivitySection />
      <Map />
    </div>
  );
};

export default Home;
