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
      className="cursor-grab overflow-hidden relative my-5"
      whileTap={{ cursor: "grabbing" }}
    >
      <h2 className="px-5 text-xl font-semibold absolute top-0">
        Photos du duplex
      </h2>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {images.map((image, index) => (
          <motion.div
            className="min-h-[30rem] min-w-[20rem] py-10 px-5"
            key={index}
          >
            <img
              src={image}
              alt="photos de la maison"
              className="w-full h-full rounded-lg pointer-events-none object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CarouselFramer;
