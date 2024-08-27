import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex border-black border-3 h-8 border-opacity-10">
      <div className="">
        {/* <img src="../LOGO.jpg" alt="Kasa logo"></img> */}
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
