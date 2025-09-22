import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ promise }) => {
  const promiseContent = use(promise);
  const countries = promiseContent.countries;

  const [countVisited, setCountVisited] = useState([]);
  const handleVisitedCountries = (country) =>{
    const newVisitedCountried = [...countVisited, country];
    setCountVisited(newVisitedCountried);
  }


  return (
    <div>
      <p>Visited Country: <ol>
        {countVisited.map(countryArry => <li>{countryArry}</li>)}
        </ol> </p>
      <h1>In the Countries bro {countries.length}</h1>
      <div className="countries">
        {countries.map((countryData) => (
          <Country
            key={countryData.cca3.cca3}
            countryData={countryData} handleVisitedCountries = {handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
