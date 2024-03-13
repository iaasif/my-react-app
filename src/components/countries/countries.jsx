// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect((() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }), [])

    return (
        <div >
            <h2 >country: {countries.length}</h2>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country key={country.cca3} props={country}>

                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;