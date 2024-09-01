import React, { useEffect, useState } from "react";
import TopSection from "../components/TopSection";
import Carousel from "../components/Carousel";
import ActivitySection from "../components/ActivitySection";
import axios from "axios";
import CarouselFramer from "../components/CarouselFramer";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/activityDB.json")
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <TopSection />
      <CarouselFramer />
      {/* <Carousel activityImg={activityImg} /> */}
      {/* {activities.length > 0 ? ( // Only render if activities exist
        activities.map(
          (
            activity,
            index // Loop through each activity
          ) => <Carousel key={activity.id} activityImg={activity} />
        )
      ) : (
        <p>Loading...</p> // Or display loading/error state
      )} */}
      <ActivitySection />
    </div>
  );
};

export default Home;
