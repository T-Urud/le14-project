import React from "react";
import backgroundImg from "../assets/landscape_art_road_127350_800x600.jpg";

const Booking = () => {
  return (
    <div className="w-1/2 h-full relative flex items-center justify-center">
      <img src={backgroundImg} alt className="w-full h-full rounded-r-md" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" bg-white max-w-80 w-full p-5 rounded-lg">
          <form className="flex flex-wrap justify-center">
            <legend className="text-xl font-semibold">
              Réserver votre séjour
            </legend>
            <div className="flex gap-2 my-3 w-full">
              <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-xl ">
                <label htmlFor="adults">Adulte(s)</label>
                <input
                  type="number"
                  max={4}
                  min={1}
                  name="adults"
                  className="w-full overflow-hidden outline-none bg-persoGrey text-center"
                />
              </div>
              <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-xl">
                <label htmlFor="kids">Enfant(s)</label>
                <input
                  type="number"
                  max={4}
                  min={1}
                  name="kids"
                  className="w-full overflow-hidden outline-none bg-persoGrey text-center"
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-slate-400 rounded-xl gap-4">
              <label htmlFor="arrive">Arrivée</label>
              <input type="date" name="arrive" className="bg-slate-400" />
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-slate-400 rounded-xl my-1 gap-4">
              <label htmlFor="depart">Départ</label>
              <input type="date" name="depart" className="bg-slate-400" />
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-slate-400 rounded-xl">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-slate-200 rounded-md w-full outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 bg-slate-100 rounded-xl p-1 uppercase font-semibold"
            >
              Réserver
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
