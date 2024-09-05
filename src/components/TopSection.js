import React from "react";
import Header from "./Header";
import terrasse from "../assets/img/appartment/terrasse.jpeg";
import Booking from "./Booking";

const TopSection = () => {
  return (
    <section className="flex flew-wrap md:flex-col-reverse">
      <Booking />
      <div className="w-full flex flex-col">
        <Header />
        <div className="h-full px-4 flex flex-col justify-end">
          <div>
            <h1 className="text-4xl font-bolder py-2">Duplex Le14</h1>
            <h2 className="font-thiner">
              Maison de 120m2 en plein centre de Tain l'Hermitage
            </h2>
          </div>
          <div className="grid grid-cols-2 mt-14 mr-8 xs:mr-0">
            <div className="rounded-md w-full h-52 flex flex-col justify-end ">
              <div className="m-4 leading-loose">
                <h2 className="pb-4">Capacité</h2>
                <span className="text-xl uppercase">4 personnes</span>
              </div>
            </div>
            <div
              className="rounded-lg w-full h-52 bg-cover"
              style={{
                backgroundImage: `url(${terrasse})`,
              }}
            ></div>
            <div className="bg-persoGrey rounded-md w-full h-28 flex flex-col justify-end p-4">
              <div>
                <h2 className="pb-4">120m2</h2>
                <span className="text-xl uppercase">4 personnes</span>
              </div>
            </div>
            <div className="rounded-lg w-full h-28 flex flex-col justify-end p-4">
              <div>
                <h2 className="pb-4">Capacité</h2>
                <span className="text-xl uppercase">4 personnes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
