import React, { useState } from "react";
import { motion } from "framer-motion";

const FigureActivity = ({ activity }) => {
  return (
    <li className="w-1/3">
      <a
        href={activity.link}
        target="blank"
        rel="noopener noreferrer"
        className="group"
      >
        <figure className="w-full relative flex items-center justify-center overflow-hidden gradient-overlay rounded-xl">
          <img
            src={activity.picture}
            alt={activity.description}
            className="w-full h-full bg-cover bg-center"
          />
          <div className="inset-0 absolute flex justify-end items-center flex-col z-10 pt-10">
            <h3 className="text-xl italic bottom-1 text-white">
              {activity.title}
            </h3>
            <div className="z-10 cursor-pointer w-full flex items-center justify-center pb-2 opacity-0 group-hover:opacity-100 duration-500">
              <button className="w-full flex items-center justify-center z-10 text-white text-3xl">
                +
              </button>
            </div>
          </div>
        </figure>
      </a>
    </li>
  );
};

export default FigureActivity;
