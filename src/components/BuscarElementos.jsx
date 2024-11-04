import react, { useState } from 'react'
import Header from './Header';


const BuscarElementos = () => {
    const items = [
        'Manzana',
        'Banana',
        'Cereza',
        'Cerezon',
        'Dátil',
        'Uva',
        'Higo',
        'Kiwi'
    ];

    const [buscador, setBuscador] = useState('')

    const handleBuscador = (e) => {
        setBuscador(e.target.value)
    }

    const handleItems = items.filter(item => item.toLowerCase().includes(buscador.toLowerCase()))

    return (
        <>
            <Header />
            <input
                value={buscador}
                placeholder='Escribe tu palabra'
                onChange={handleBuscador}
            />

            <ul>
                {handleItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </>
    );
}

export default BuscarElementos;