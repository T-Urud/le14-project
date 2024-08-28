import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 border-black border-3 h-14 border-opacity-10 w-1/2 absolute right-0 top-0 bg-blue-200">
      <div className="">
        {/* <img src="../LOGO.jpg" alt="Kasa logo"></img> */}
        logoo
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
