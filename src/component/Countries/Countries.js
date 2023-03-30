import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    // step 1:
    const [countries, setCountries] = useState([]);
    // step:2
    useEffect(() => {
        // step:3 
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))  // state dclear 


    }, [])
    return (
        <div >
            <h1>hello from countries {countries.length}</h1>
            {/* step:5: show the data in display */}
            <div className='countries-container' >
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}  ></Country>)
                }
            </div>

        </div >
    );
};

export default Countries;