import React from "react";
import Header from "./Header";
import backgroundImg from "../assets/landscape_art_road_127350_800x600.jpg";
import Booking from "./Booking";

const TopSection = () => {
  return (
    <section className="grid grid-cols-2 w-screen">
      <Booking />
      <div className="w-full flex flex-col">
        <Header />
        <div className="h-full px-4 flex flex-col justify-end">
          <h1 className="text-4xl font-bold">Duplex Le14</h1>
          <h2 className="mt-4">
            Maison de 120m2 en plein centre de Tain l'Hermitage
          </h2>
          <div className="grid grid-cols-2 mt-14 mr-8">
            <div className="rounded-md w-full h-36 flex flex-col items-center justify-center">
              <div className="">
                <h2>Capacité</h2>
                <span>4 personnes</span>
              </div>
            </div>
            <div
              className="rounded-lg w-full h-36 bg-center bg-cover"
              style={{
                backgroundImage: `url(${backgroundImg})`,
              }}
            ></div>
            <div className="bg-persoGrey rounded-md w-full h-28 flex flex-col items-center justify-center">
              <div className="">
                <h2>120m2</h2>
                <span>4 personnes</span>
              </div>
            </div>
            <div className="rounded-lg w-full h-28 flex flex-col items-center justify-center">
              <div className="">
                <h2>Capacité</h2>
                <span>4 personnes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
