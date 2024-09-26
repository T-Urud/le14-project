import React from "react";
import Navigation from "./Navigation";
import Logo from "../assets/img/Logo-Le14.webp";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 w-full ">
      <div className="w-[150px] h-[150px] xs:w-[75px] xs:h-[75px] rounded-full ">
        <img
          src={Logo}
          alt="Le14 logo"
          className="w-full h-full object-contain rounded-full scale-150"
        ></img>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
