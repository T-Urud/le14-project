import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div className="">
      <ul className="flex gap-8 uppercase font-bold">
        <NavLink to="/" className={(nav) => (nav.isActive ? "" : "")}>
          <li>Accueil</li>
        </NavLink>
        <li>
          <Link smooth to="#activity">
            Activités
          </Link>
        </li>
        <li>
          <Link smooth to="#map">
            map
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
