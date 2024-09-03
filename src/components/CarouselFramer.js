import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../images";

const CarouselFramer = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth); permet de calculer pour afficher correctement à l'écran
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.section
      id="carousel"
      ref={carousel}
      className="cursor-grab overflow-hidden relative"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex "
      >
        {images.map((image) => (
          <motion.div className="min-h-[30rem] min-w-[20rem] py-10 px-5">
            <img
              src={image}
              key={image}
              alt=""
              className="w-full h-full rounded-sm pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CarouselFramer;
