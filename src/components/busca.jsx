import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const SearchableList = () => {
    // Lista simulada de elementos
    const items = [
        'Manzana',
        'Banana',
        'Cereza',
        'Dátil',
        'Uva',
        'Higo',
        'Kiwi',
    ];

    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Función para manejar el cambio en el campo de búsqueda
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrando los elementos que incluyen el término de búsqueda
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Buscador de Frutas</h2>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <SearchableList />
    </Wrapper>
);

export default ResponsiveComponent;
