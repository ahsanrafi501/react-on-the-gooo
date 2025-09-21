import React, { use } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ promise }) => {
  const promiseContent = use(promise);
  const countries = promiseContent.countries;
  return (
    <div>
      <h1>In the Countries bro {countries.length}</h1>
      <div className="countries">
        {countries.map((countryData) => (
          <Country
            key={countryData.cca3.cca3}
            countryData={countryData}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
