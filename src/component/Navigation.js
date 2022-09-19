import React from "react";
import { NavLink } from "react-router-dom"; // ANCRE en react <a>

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* CELA REVIENT A <a href=""> </a> */}
        <NavLink
          to="/home"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          {/*SI LE LIEN EST CLIQUER ALORS LA CLASSE nav-active s'active*/}
          <li>accueil</li>
        </NavLink>
        {/* CELA REVIENT A <a href=""> </a> */}
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          {/*SI LE LIEN EST CLIQUER ALORS LA CLASSE nav-active s'active*/}
          <li>a propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
