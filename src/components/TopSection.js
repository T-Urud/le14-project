import React from "react";
import cityPic from "../assets/img/Tain-l-Hermitage-Rhône-France.webp";
import Booking from "./Booking";

const TopSection = () => {
  return (
    <section className="flex flex-row-reverse md:flex-col-reverse">
      <Booking />
      <div className="w-full flex flex-col">
        <div className="h-full px-4 flex flex-col">
          <div>
            <h1 className="text-[40px] font-bolder text-[#9a3136]">
              Duplex Le14
            </h1>
          </div>
          <div className="grid grid-cols-2 mt-10 mr-8 xs:mr-0">
            <div className="rounded-md w-full h-52 flex flex-col justify-end ">
              <div className="m-4 leading-loose">
                <h2 className="pb-2 uppercase">Equipements</h2>
                <a
                  href="https://www.airbnb.fr/rooms/668761335413611186/amenities?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-09-07&check_out=2024-09-12&source_impression_id=p3_1725472817_P3LlHi_T1MVTPXCV&previous_page_section_name=1000&federated_search_id=9a99b517-bbe2-43cb-ac30-557bcb2f1998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] xs:text-sm"
                >
                  Voir la liste complète
                </a>
              </div>
            </div>
            <div
              className="rounded-lg w-full h-52 bg-cover"
              style={{
                backgroundImage: `url(${cityPic})`,
              }}
            ></div>
            <div className="bg-[#9a3136] rounded-md w-full h-28 flex flex-col justify-end p-4 text-socialColor">
              <div>
                <h2 className="pb-2 uppercase">Capacité</h2>
                <span className="text-lg xs:text-sm">4 personnes</span>
              </div>
            </div>
            <div className="rounded-lg w-full h-28 flex flex-col justify-end p-4">
              <div>
                <h2 className="pb-2 uppercase">Moyens de paiement</h2>
                <span className="text-lg xs:text-sm">Chèque, espèces</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
