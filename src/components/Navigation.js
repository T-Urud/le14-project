import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="">
      <ul className="flex gap-8 uppercase font-bold">
        <NavLink to="/" className={(nav) => (nav.isActive ? "" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/contact" className={(nav) => (nav.isActive ? "" : "")}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
