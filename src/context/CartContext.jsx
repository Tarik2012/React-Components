import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

// Crear el contexto
const CartContext = createContext();

// Hook para acceder al contexto fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    // Función para eliminar un producto del carrito por su ID
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <CartProvider>
            {/* Aquí puedes incluir contenido que utilice el contexto del carrito */}
            <div>Contenido que utiliza el contexto del carrito.</div>
        </CartProvider>
    </Wrapper>
);

export default ResponsiveComponent;
