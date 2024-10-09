import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div className="">
      <ul className="flex gap-8 uppercase lg:gap-4 xs:text-sm xs:gap-2 xs:flex-col">
        <li>
          <Link smooth to="#carousel">
            La maison
          </Link>
        </li>
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
