import React from 'react';
import Home from './pages/Home'; // Correcto, este es tu componente Home
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corregido para usar Routes en lugar de Switch
import Tareas from './components/Tareas';
import MapComponent from './components/MapComponent';
import Galeria from './components/Galeria';
import ContactForm from './components/ContactForm';
import ProductList from './components/ProductList';
import './App.css';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import BuscarElementos from './components/BuscarElementos';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* La ruta principal "/" renderiza el componente Home */}
            <Route path="/" element={<Home />} />
            <Route path="/Tareas" element={<Tareas />} />
            <Route path="/MapComponent" element={<MapComponent />} />
            <Route path="/Galeria" element={<Galeria />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/ProductList" element={<ProtectedRoute element={<ProductList />} />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/BuscarElementos" element={<BuscarElementos />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
