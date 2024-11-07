import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Greeting = ({ name, age, isStudent }) => {
    return (
        <div>
            <h1>Hello, my name is {name}!</h1>
            <p>I am {age} years old</p>
=======
const Greeting = ({ name, age, isStudent, profeshion }) => {
    return (
        <div>
            <h1>Hello Mi name is, {name}!</h1>
            <h2>Profeshion : {profeshion}</h2>
            <p>I have: {age} yers</p>
>>>>>>> 6bd75b3623fe0351e044fcff93873d6ec1ceaca6
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

const ResponsiveComponent = () => (
    <Wrapper>
        <Greeting name="John Doe" age={25} isStudent={true} />
    </Wrapper>
);

export default ResponsiveComponent;
