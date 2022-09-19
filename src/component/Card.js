import React from "react";

const Card = ({ country }) => {
  // {} permet de déstructuré
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau" + country.translations.fra.common}
      ></img>
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>{" "}
        {/* toLocaleString() est un séparateur de millier */}
      </div>
    </li>
  );
};

export default Card;
