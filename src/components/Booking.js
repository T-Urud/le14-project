import React from "react";
import backgroundImg from "../assets/landscape_art_road_127350_800x600.jpg";

const Booking = () => {
  return (
    <div className="w-1/2 h-full relative">
      <div className="">
        <img
          src={backgroundImg}
          alt=""
          className="w-full h-full rounded-r-md"
        />
      </div>
      <div className="bg-white absolute top-0 left-0 translate-x-1/2 translate-y-1/2 max-w-80 w-full p-5 rounded-lg">
        <form className="flex flex-wrap justify-center">
          <legend className="text-xl font-semibold">
            Réserver votre séjour
          </legend>
          <div className="flex gap-2 my-3 w-full">
            <div className="w-1/2 flex justify-center items-center p-2 bg-slate-300 rounded-xl ">
              <label htmlFor="adults"></label>
              <input
                type="number"
                max={4}
                min={1}
                name="adults"
                placeholder="Adultes"
                className="w-full overflow-hidden outline-none bg-slate-300"
              />
            </div>
            <div className="w-1/2 flex justify-center items-center p-2 bg-slate-300 rounded-xl">
              <label htmlFor="kids"></label>
              <input
                type="number"
                max={4}
                min={1}
                name="kids"
                placeholder="Enfants"
                className="w-full overflow-hidden outline-none bg-slate-300"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center p-2 bg-slate-400 rounded-xl">
            <label htmlFor="arrive">Arrivée</label>
            <input type="date" name="arrive" />
          </div>
          <div className="w-full flex justify-center items-center p-2 bg-slate-400 rounded-xl my-1">
            <label htmlFor="depart">Départ</label>
            <input type="date" name="depart" />
          </div>
          <div className="w-full flex justify-center items-center p-2 bg-slate-400 rounded-xl">
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="Email" />
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
  );
};

export default Booking;
