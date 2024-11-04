import React from 'react';
import { useCart } from '../context/CartContext'; // Importar el hook personalizado del carrito
import Header from './Header';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart(); // Acceder al estado y funciones del carrito

    return (
        <div>
            <Header />
            <h2>Carrito de Compras</h2>

            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0', marginTop: '40px' }}>
                            <h4>{item.name}</h4>
                            <p>Precio: ${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <button onClick={clearCart} style={{ marginTop: '10px' }}>Vaciar Carrito</button>
                </div>
            )}
        </div>
    );
};

export default Cart;

