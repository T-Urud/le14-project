import React from "react";
import { motion } from "framer-motion";

const FigureActivity = ({ activity }) => {
  return (
    <li className="w-2/5 xs:w-full">
      <a
        href={activity.link}
        target="blank"
        rel="noopener noreferrer"
        className="group"
      >
        <figure className="w-full relative flex items-center justify-center overflow-hidden gradient-overlay rounded-xl xs:h-64">
          <img
            src={activity.picture}
            alt={activity.description}
            className="w-full h-full object-cover object-center"
          />
          <div className="inset-0 absolute flex justify-end items-center flex-col z-10 py-4">
            <h3 className="text-xl italic bottom-1 text-white uppercase text-center">
              {activity.title}
            </h3>
            <div className="z-10 cursor-pointer w-full flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
              <motion.button
                className="w-full flex items-center justify-center z-10 mt-2 text-slate-300 text-xs uppercase"
                whileHover={{ color: "#ffffff", scale: 1.05 }}
              >
                découvrir
              </motion.button>
            </div>
          </div>
        </figure>
      </a>
    </li>
  );
};

export default FigureActivity;
