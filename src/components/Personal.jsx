import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Personal = () => {
    const [contador, setContador] = useState(0); // Inicialización correcta del estado

    const handleContador = () => {
        setContador(prevContador => prevContador + 1); // Incremento correcto
    };

    return (
        <>
            <Header />
            <div>
                <h2>Contador: {contador}</h2>
                <button onClick={handleContador}>Incrementar</button>
            </div>
        </>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <Personal />
    </Wrapper>
);

export default ResponsiveComponent;
