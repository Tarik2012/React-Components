import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ProjectDashboard from './components/ProjectDashboard';
import Personal from './components/Personal';

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <BrowserRouter basename="/React-Components">
          <Routes>
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
            <Route path="/ProjectDashboard" element={<ProjectDashboard />} />
            <Route path="/Personal" element={<Personal />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
