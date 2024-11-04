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