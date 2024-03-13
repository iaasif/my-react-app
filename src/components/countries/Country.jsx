// import React from 'react';
import './country.css';

const Country = ({ props }) => {

    const { name, flags , population, area, cca3 } = props;
    console.log(props);
    return (
        <div className='country'>
            <h3 >name is: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area} km</p>
            <small>code: {cca3}</small>
        </div>
    );
};

export default Country;