import React from "react";
import Navigation from "./Navigation";
import Logo from "../assets/img/Le14-logo.webp";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 w-full">
      <div className="w-[150px] h-[150px]  rounded-full">
        <img
          src={Logo}
          alt="Le14 logo"
          className="w-full h-full object-contain rounded-full"
        ></img>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
