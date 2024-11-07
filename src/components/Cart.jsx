import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext'; // Importar el hook personalizado del carrito
import Header from './Header';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const CartContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;

const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart(); // Acceder al estado y funciones del carrito

    return (
        <CartContainer>
            <Header />
            <Title>Carrito de Compras</Title>

            {cartItems.length === 0 ? (
                <EmptyCartMessage>El carrito está vacío</EmptyCartMessage>
            ) : (
                <CartItemList>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <p>
                                {item.name} - {item.price}
                            </p>
                            <button onClick={() => removeFromCart(item)}>Eliminar</button>
                        </div>
                    ))}
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </CartItemList>
            )}
        </CartContainer>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <Cart />
    </Wrapper>
);

export default ResponsiveComponent;
