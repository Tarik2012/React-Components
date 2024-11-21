import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Greeting = ({ name, age, isStudent, profession }) => {
    return (
        <div>
            <h1>Hello, my name is {name}!</h1>
            <p>I am {age} years old</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
            <p>Profession: {profession}</p>
        </div>
    );
};

// Definir los tipos de las props esperadas con PropTypes
Greeting.propTypes = {
    name: PropTypes.string.isRequired,  // name debe ser una cadena (string) y es requerido
    age: PropTypes.number,              // age debe ser un número
    isStudent: PropTypes.bool,          // isStudent debe ser un valor booleano
    profession: PropTypes.string.isRequired, // profession debe ser un string requerido
};

export default Greeting;
