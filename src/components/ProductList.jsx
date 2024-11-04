import React, { useState, useEffect } from "react";
import Header from "./Header";
import productsData from '../productos.json';
import { useCart } from '../context/CartContext';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart(); // Obtenemos la función addToCart del contexto

    useEffect(() => {
        setProducts(productsData);
    }, []);

    return (
        <>
            <Header />
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((producto) => (
                        <div key={producto.id} className="product-item">
                            <h3>{producto.name}</h3>
                            <p>{`$${producto.price.toFixed(2)}`}</p>
                            <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron productos.</p>
                )}
            </div>
        </>
    );
};

export default ProductList;
