import React, { useEffect, useState } from "react";
import TopSection from "../components/TopSection";
import Carousel from "../components/Carousel";
import ActivitySection from "../components/ActivitySection";
import axios from "axios";

const Home = () => {
  const [activityImg, setActivityImg] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/activityDB.json")
      .then((res) => {
        setActivityImg(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <TopSection />
      <Carousel activityImg={activityImg} />
      <ActivitySection />
    </div>
  );
};

export default Home;
