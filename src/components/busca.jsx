import React, { useState } from 'react';

const SearchableList = () => {
    // Lista simulada de elementos
    const items = [
        'Manzana',
        'Banana',
        'Cereza',
        'Dátil',
        'Uva',
        'Higo',
        'Kiwi'
    ];

    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Función para manejar el cambio en el campo de búsqueda
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrando los elementos que incluyen el término de búsqueda
    const filteredItems = items.filter(item =>
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

export default SearchableList;
