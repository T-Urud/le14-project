import React from "react";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className="bg-persoGrey rounded-xl p-5 m-5 w-1/2 flex items-center justify-center flex-col sm:w-auto sm:my-0 sm:mx-5">
      <div className="shadow-2xl w-2/3 rounded-xl p-2  h-full max-h-[150px] lg:max-h-none lg:flex lg:flex-col lg:justify-center">
        <h3 className="mb-5 text-center md:mb-0">Retrouve-nous sur</h3>
        <div className="flex gap-6 justify-center flex-wrap  items-center md:p-4 xs:py-4 xs:px-0">
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="h-12 w-12 grid place-items-center rounded-full outline outline-2 outline-white bg-transparent border-none"
              whileHover={{
                cursor: "pointer",
                outlineOffset: "3px",
                background: "#0F1419",
                transform: "scale(1.35)",
              }}
              initial={{ transform: "scale(1)" }}
            >
              <motion.svg
                className="fill-white transition-all"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </motion.svg>
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            </motion.button>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="h-12 w-12 grid place-items-center rounded-full outline outline-2 outline-white bg-transparent border-none"
              whileHover={{
                cursor: "pointer",
                outlineOffset: "3px",
                background: "#316FF6",
                transform: "scale(1.35)",
              }}
              initial={{ transform: "scale(1)" }}
            >
              <motion.svg
                className="fill-white transition-all"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </motion.svg>
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            </motion.button>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="h-12 w-12 grid place-items-center rounded-full outline outline-2 outline-white bg-transparent border-none"
              whileHover={{
                cursor: "pointer",
                outlineOffset: "3px",
                background:
                  "radial-gradient(circle at 30% 107%, #f9ce34 0%, #f9ce34 5%, #fd5949 45%, #ee2a7b 60%, #6228d7 90%)",
                transform: "scale(1.35)",
              }}
              initial={{ transform: "scale(1)" }}
            >
              <motion.svg
                className="fill-white transition-all"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </motion.svg>
              {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            </motion.button>
          </a>
          <a
            href="https://www.airbnb.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="h-12 w-12 grid place-items-center rounded-full outline outline-2 outline-white bg-transparent border-none"
              whileHover={{
                cursor: "pointer",
                outlineOffset: "3px",
                background: "#ff385c",
                transform: "scale(1.35)",
              }}
              initial={{ transform: "scale(1)" }}
            >
              <motion.svg
                className="fill-white transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height="16"
                width="16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <path d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z" />
              </motion.svg>
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
