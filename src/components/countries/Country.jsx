// import React from 'react';
import './country.css';

const Country = ({ props }) => {

    const { name, flags } = props;
    console.log(props);
    return (
        <div className='country'>
            <h3 >name is: {name?.common}</h3>
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default Country;