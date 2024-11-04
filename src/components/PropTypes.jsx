import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name, age, isStudent }) => {
    return (
        <div>
            <h1>Hello Mi name is, {name}!</h1>

            <p>I have: {age} yers</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
};

// Definir los tipos de las props esperadas con PropTypes
Greeting.propTypes = {
    name: PropTypes.string.isRequired,  // name debe ser una cadena (string) y es requerido
    age: PropTypes.number,              // age debe ser un número
    isStudent: PropTypes.bool           // isStudent debe ser un valor booleano
};

export default Greeting;
