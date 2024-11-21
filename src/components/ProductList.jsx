import React, { useState, useEffect } from "react";
import Header from "./Header";
import productsData from '../productos.json'; // Asegúrate de que la ruta sea correcta
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const ProductListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ProductItem = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-4px);
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 16px;
`;

const ProductName = styled.h3`
    font-size: 1.5em;
    margin: 8px 0;
`;

const ProductPrice = styled.p`
    font-size: 1.2em;
    color: #333;
`;

const AddToCartButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 16px;
    font-size: 1em;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart(); // Obtenemos la función addToCart del contexto

    useEffect(() => {
        setProducts(productsData);
    }, []);

    return (
        <>
            <Header />
            <p>usuario:user1</p>
            <p>contraseña:user1</p>
            <ProductListContainer>
                {products.length > 0 ? (
                    products.map((producto) => (
                        <ProductItem key={producto.id}>
                            <ProductImage src={producto.image} alt={producto.name} />
                            <ProductName>{producto.name}</ProductName>
                            <ProductPrice>{`$${producto.price.toFixed(2)}`}</ProductPrice>
                            <AddToCartButton onClick={() => addToCart(producto)}>
                                Agregar al carrito
                            </AddToCartButton>
                        </ProductItem>
                    ))
                ) : (
                    <p>No se encontraron productos.</p>
                )}
            </ProductListContainer>
        </>
    );
};

export default ProductList;
