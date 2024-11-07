import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Contenedor principal del Wrapper
const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

// Contenedor del menú de navegación, responsivo y fijo en la parte superior
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  // Estilos para pantallas más pequeñas
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
  }
`;

// Estilos para cada NavLink, con clase `active` cuando el enlace está activo
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #343a40;
  font-size: 16px;
  margin: 0 10px;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &.active {
    color: white;
    background-color: #007bff;
  }

  &:hover {
    background-color: #e2e6ea;
  }

  // Ajustes para pantallas más pequeñas
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 5px;
    padding: 6px 10px;
  }
`;

const Header = () => {
  return (
    <NavContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/Tareas">Lista Tareas</StyledNavLink>
      <StyledNavLink to="/MapComponent">Mapa</StyledNavLink>
      <StyledNavLink to="/Galeria">Galeria</StyledNavLink>
      <StyledNavLink to="/ContactForm">Contacto</StyledNavLink>
      <StyledNavLink to="/ProductList">Lista de productos</StyledNavLink>
      <StyledNavLink to="/Cart">Carrito</StyledNavLink>
      <StyledNavLink to="/BuscarElementos">Buscador</StyledNavLink>
      <StyledNavLink to="/Login">Login</StyledNavLink>
      <StyledNavLink to="/Register">Register</StyledNavLink>
      <StyledNavLink to="/ProjectDashboard">Dashboard</StyledNavLink>
    </NavContainer>
  );
};

const ResponsiveComponent = () => (
  <Wrapper>
    <Header />
  </Wrapper>
);

export default ResponsiveComponent;
