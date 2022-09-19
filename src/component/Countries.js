import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]); // un par sur un tableau vide par défaut;
  const [rangeValue, setRangeVlue] = useState(36); // par défaut 36 pays visible
  const [selectedRadio, setSelectedRadio] = useState(""); // on stock le continent clicker par l'utilisateur
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  // useEffect se joue lorsque le composant est monté ( lorsque on appel le composant)
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data)); // on modifie la variable data en utilisant le UseState via la variable setData
  }, []);

  // useEffect se joue lorsque le composant est monté ( lorsque on appel le composant)
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeVlue(e.target.value)}
        />
        {/* dans l'évenement onChange on change la valeur de setRangeValue en fonction de la barre range */}
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continent"
              checked={continent === selectedRadio} // condition si continent est égal a selectedRadio   si faux alors radio non coché
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
            {/* htmlFor identique a for en React */}
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      {/* selectedRadio&&   équivaut a  selectedradio === true  */}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio)) // filter permet de filtrer les données ( dans cette exemple on affiche les pays qui ont comme continent le selectedRadio)
          .sort((a, b) => b.population - a.population) // sort permet de triée le resultat  dans l'exemple décroissant
          .slice(0, rangeValue) // slice() permet donné une limite (valeur de début,valeur de fin)
          .map(
            (
              country,
              index // Il est important d'avoir un clé unique quand on map un tableau
            ) => (
              <Card key={index} country={country} /> // UNE PROPS est une donnée passé en attribut d'un composant enfant
            )
          )}
      </ul>
    </div>
  );
};

export default Countries;
