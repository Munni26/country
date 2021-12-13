import React from 'react';

const AllCountry = ({ countries, handleCountry }) => {
    const { id, title } = countries;
    return (
        <div>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <button onClick={() => handleCountry(countries)}>Add</button>


        </div>
    );
};

export default AllCountry;


