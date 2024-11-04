import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name, age, isStudent, profeshion }) => {
    return (
        <div>
            <h1>Hello Mi name is, {name}!</h1>
            <h2>Profeshion : {profeshion}</h2>
            <p>I have: {age} yers</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
};

// Definir los tipos de las props esperadas con PropTypes
Greeting.propTypes = {
    name: PropTypes.string.isRequired,  // name debe ser una cadena (string) y es requerido
    age: PropTypes.number,              // age debe ser un número
    isStudent: PropTypes.bool,           // isStudent debe ser un valor booleano
    profeshion: PropTypes.string.isRequired
};

export default Greeting;
