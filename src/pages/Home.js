import React from "react";
import TopSection from "../components/TopSection";
import ActivitySection from "../components/ActivitySection";
import CarouselFramer from "../components/CarouselFramer";
import Map_Social from "../components/Map_Social";

const Home = () => {
  return (
    <div>
      <TopSection />
      <CarouselFramer />
      <ActivitySection />
      <Map_Social />
    </div>
  );
};

export default Home;
