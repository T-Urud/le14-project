import React, { useState } from "react";
import { motion } from "framer-motion";

const FigureActivity = ({ activity }) => {
  // const [focus, setFocus] = useState(false);
  // const handleCardFocus = () => {
  //   setFocus(true);
  // };
  // const handleCardBlur = () => {
  //   setFocus(false);
  // };

  return (
    <li className="w-1/3">
      <motion.figure
        // onFocus={handleCardFocus}
        // onBlur={handleCardBlur}
        whileHover={{ opacity: 1 }}
        className="w-full relative flex items-center justify-center overflow-hidden gradient-overlay rounded-xl"
      >
        <img
          src={activity.picture}
          alt={activity.description}
          className="w-full h-full bg-cover bg-center"
        />
        <div className="inset-0 absolute flex justify-end items-center flex-col z-10 py-10">
          <h3 className="text-xl italic bottom-1 text-white">
            {activity.title}
          </h3>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          // transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <p className="text-3xl italic bottom-1 text-white z-10">
            <a href={activity.link} target="blank" rel="noopener noreferrer">
              +
            </a>
          </p>
        </motion.div>
      </motion.figure>
    </li>
  );
};

export default FigureActivity;
