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
    <div className="carousel">
      <button
        // className={activityImg.length === 1 ? `prev hidden` : "prev"}
        onClick={previousSlide}
      >
        &#10096;
      </button>
      <button
        // className={activityImg.length === 1 ? `next hidden` : "next"}
        onClick={nextSlide}
      >
        &#10097;
      </button>
      <ul>
        {pictures.map((slide, index) => (
          <li
            key={index}
            className="w-80 h-80"
            // className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide}
              alt={activityImg.title}
              className="w-full h-full bg-cover bg-center"
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
