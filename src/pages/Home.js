import React from "react";
import Header from "../components/Header";
import backgroundImg from "../assets/landscape_art_road_127350_800x600.jpg";
import Booking from "../components/Booking";

const Home = () => {
  return (
    <section className="flex relative">
      <Booking />
      <Header />
      <div className="w-1/2 mt-20 h-auto px-4">
        <h1 className="text-4xl font-bold">Duplex Le14</h1>
        <h2>Maison de 120m2 en plein centre de Tain l'Hermitage</h2>
        <div className="grid grid-cols-2 mt-8 mr-8">
          <div className="rounded-md w-full h-28 flex flex-col items-center justify-center">
            <div className="">
              <h2>Capacité</h2>
              <span>4 personnes</span>
            </div>
          </div>
          <div className="bg-persoGrey rounded-md w-full h-28 flex flex-col items-center justify-center">
            <div className="">
              <h2>120m2</h2>
              <span>4 personnes</span>
            </div>
          </div>
          <div
            className="rounded-lg w-full h-36 bg-center bg-cover"
            style={{
              backgroundImage: `url(${backgroundImg})`,
            }}
          ></div>
          <div className="rounded-lg w-full h-36 flex flex-col items-center justify-center">
            <div className="">
              <h2>Capacité</h2>
              <span>4 personnes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
