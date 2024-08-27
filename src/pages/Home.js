import React from "react";
import Header from "../components/Header";
import backgroundImg from "../assets/landscape_art_road_127350_800x600.jpg";
import Activity from "../components/Activity";

const Home = () => {
  return (
    <section className="flex">
      <Activity />
      <Header />
      <div className="w-1/2">
        <h1>Duplex Le14</h1>
        <h2>Maison de 120m2 en plein centre de Tain l'Hermitage</h2>
        <div className="grid grid-cols-2 my-8">
          <div className="bg-slate-400 rounded-md w-48 h-20">
            <h2>Capacité</h2>
            <span>4 personnes</span>
          </div>
          <div className="bg-slate-200 rounded-md w-48 h-20">
            <h2>120m2</h2>
            <span>4 personnes</span>
          </div>
          <div
            className="rounded-lg w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${backgroundImg})`,
            }}
          ></div>
          <div className="">
            <h2>120m2</h2>
            <span>4 personnes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
