import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import image from "../images";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, zIndex: -1, scale: 0.2 },
  visible: { opacity: 1, zIndex: 10, scale: 1 },
};

const Booking = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleUserClick = () => {
    setIsClicked(true);
  };

  const [isHover, setIsHover] = useState(false);

  const [arrivingDate, setArrivingDate] = useState(new Date());
  const [leavingDate, setLeavingDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [selectedAdults, setSelectedAdults] = useState("");
  const [selectedKids, setSelectedKids] = useState("");

  const remainingCapacity = 4 - selectedAdults;

  return (
    <motion.div
      className="h-auto w-full min-h-[472px] md:mt-4"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <div className="w-full h-full min-h-[472px] relative flex items-center justify-center">
        <img
          src={image[2]}
          alt=""
          className="w-full h-full min-h-[472px] rounded-r-2xl md:rounded-lg xs:rounded-none"
        />

        {!isClicked && isHover && (
          <motion.button
            onClick={handleUserClick}
            animate={isClicked ? "hidden" : "visible"}
            transition={{ duration: 1 }}
            variants={variants}
            className="absolute text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          >
            Réserver
          </motion.button>
        )}
        {isClicked && (
          <motion.div
            animate={isClicked ? "visible" : "hidden"}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            variants={variants}
            className="absolute inset-0 flex items-center justify-center p-5"
          >
            <div className=" bg-white w-full p-6 rounded-lg max-h-full flex-grow max-w-96">
              <form
                className="flex flex-wrap justify-center h-full w-full font-thiner flex-1"
                onSubmit={handleSubmit(onSubmit)}
              >
                <legend className="text-xl font-semibold">
                  Réserver votre séjour
                </legend>
                <div className="flex gap-2 my-3 w-full">
                  <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-full">
                    <select
                      {...register("Adults", { required: true })}
                      className="w-full overflow-hidden outline-none bg-persoGrey text-center xs:text-sm"
                      value={selectedAdults}
                      onChange={(e) => {
                        const adults = parseInt(e.target.value);
                        setSelectedAdults(adults);
                        if (adults + selectedKids > 4) {
                          setSelectedKids(4 - adults);
                        }
                      }}
                    >
                      <option value="" disabled>
                        Adulte(s)
                      </option>
                      {/* Array() crée tableau avec nb de spots demandés, .keyx() renvoie clés d'index, ... converti en tableau réel*/}
                      {[...Array(4).keys()]
                        // commencer array à index 1
                        .map((n) => n + 1)
                        .map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-full">
                    <select
                      {...register("Kids", { required: true })}
                      className="w-full overflow-hidden outline-none bg-persoGrey text-center xs:text-sm"
                      value={selectedKids}
                      onChange={(e) =>
                        setSelectedKids(parseInt(e.target.value))
                      }
                    >
                      <option value="" disabled>
                        Enfant(s)
                      </option>
                      {/* Array() crée tableau avec nb de spots demandés, .keyx() renvoie clés d'index, ... converti en tableau réel*/}
                      {[...Array(remainingCapacity + 1).keys()].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full gap-4 xs:text-sm">
                  <span>Arrivée</span>
                  <DatePicker
                    value={arrivingDate}
                    onChange={setArrivingDate}
                    minDate={arrivingDate}
                  />
                </div>
                <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full my-1 gap-4 xs:text-sm">
                  <span>Départ</span>
                  <DatePicker
                    value={leavingDate}
                    onChange={setLeavingDate}
                    minDate={arrivingDate}
                  />
                </div>
                <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full my-1">
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="bg-transparent rounded-md w-full outline-none ml-4"
                  />
                </div>
                <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full">
                  <input
                    type="text"
                    placeholder="Nom"
                    {...register("Last name", {
                      required: true,
                      maxLength: 100,
                    })}
                    className="bg-transparent rounded-md w-full outline-none ml-4"
                  />{" "}
                </div>
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2"
                >
                  Réserver
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Booking;
