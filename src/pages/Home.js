import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Duplex Le14</h1>
      <h2>Maison de 120m2 en plein centre de Tain l'Hermitage</h2>
      <div className="grid">
        <div className="bg-slate-400 rounded-md">
          <h2>Capacité</h2>
          <span>4 personnes</span>
        </div>
        <div className="">
          <h2>120m2</h2>
          <span>4 personnes</span>
        </div>
        <div className="bg-slate-200 rounded-md">
          <h2>120m2</h2>
          <span>4 personnes</span>
        </div>
        <div className="">
          <h2>120m2</h2>
          <span>4 personnes</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
