import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, name, flags } = props.country
    return (
        <div className='country'>
            <img src="" alt="" />
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area:{area}</p>
        </div>
    );
};

export default Country;