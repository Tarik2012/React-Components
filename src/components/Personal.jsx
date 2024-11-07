<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import Header from "./Header";
import { Button } from "antd";


const Personal = () => {
    const [contador, setContador] = useState(0)
    const numero = 12

    const handleContador = () => {
        setContador(contador + numero)
    }
    const restContador = () => {
        setContador(0)
    }
    return (
        <>
            <Header />
            <Button onClick={handleContador}>Pisame</Button>
            <Button onClick={restContador}>resetear</Button>
            <h3>Contado : {contador}</h3>
        </>
    );
}

export default Personal;
>>>>>>> 6bd75b3623fe0351e044fcff93873d6ec1ceaca6
