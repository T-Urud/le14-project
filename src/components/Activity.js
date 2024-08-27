import React from "react";
import backgroundImg from "../assets/landscape_art_road_127350_800x600.jpg";

const Activity = () => {
  return (
    <div className="w-1/2 h-full ">
      <div className="">
        <img
          src={backgroundImg}
          alt=""
          className="w-full h-full rounded-r-md"
        />
      </div>
    </div>
  );
};

export default Activity;
