import React, { useState } from 'react';
import './country.css'
const Country = ({countryData, handleVisitedCountries}) => {
    //  console.log(countryData.cca3.cca3)

    const [Visited, setVisited] = useState(false);
    const handleClick = () => {
        // if(Visited) {
        //     setVisited(false)
        // }

        // else{
        //     setVisited(true);
        // }

        // {Visited ? setVisited(false) : setVisited(true)}

        setVisited(!Visited);
        handleVisitedCountries(countryData.name.common);
    }

    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={countryData.flags.flags.png} alt={countryData.flags.flags.alt} />
            <h3>name: {countryData.name.common}</h3>
            <p>Population: {countryData.population.population}</p>
            <p>Area: {countryData.area.area} || {countryData.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleClick}>{ Visited ? 'Visited' : "Not Visited"}</button>
        </div>
    );
};

export default Country;