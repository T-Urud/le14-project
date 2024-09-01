import React, { useState } from "react";

const Carousel = ({ activityImg }) => {
  // Determine if pictures are in an array or a single image string
  const pictures = Array.isArray(activityImg.picture)
    ? activityImg.picture
    : [activityImg.picture];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      <button
        className="absolute z-10 left-4 top-1/2 -translate-y-1/2 text-black bg-white"
        onClick={previousSlide}
      >
        &#10096;
      </button>
      <button
        className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-black bg-white"
        onClick={nextSlide}
      >
        &#10097;
      </button>
      <ul className="relative h-full w-full">
        {pictures.map((slide, index) => (
          <li
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={activityImg.title}
              className="w-full h-full object-cover"
            />
            <span>
              {currentSlide + 1}/{pictures.length}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
