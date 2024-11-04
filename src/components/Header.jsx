import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Estilos del contenedor del menú de navegación (en fila y fijo en la parte superior)
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Estilos para cada NavLink, con clase `active` cuando el enlace está activo
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #343a40;
  font-size: 18px;
  margin: 0 15px;
  padding: 10px 15px;
  border-radius: 5px;

  &.active {
    color: white;
    background-color: #007bff;
  }

  &:hover {
    background-color: #e2e6ea;
  }
`;

const Header = () => {
  return (
    <NavContainer>
      <StyledNavLink to="/">
        Home
      </StyledNavLink>
      <StyledNavLink to="/Tareas">
        Lista Tareas
      </StyledNavLink>
      <StyledNavLink to="/MapComponent">
        Mapa
      </StyledNavLink>
      <StyledNavLink to="/Galeria">
        Galeria
      </StyledNavLink>
      <StyledNavLink to="/ContactForm">
        contacto
      </StyledNavLink>
      <StyledNavLink to="/ProductList">
        Lista de productos
      </StyledNavLink>
      <StyledNavLink to="/Cart">
        Carrito
      </StyledNavLink>
      <StyledNavLink to="/BuscarElementos">
        Buscador
      </StyledNavLink>
      <StyledNavLink to="/Login">
        Login
      </StyledNavLink>
      <StyledNavLink to="/Register">
        Register
      </StyledNavLink>

    </NavContainer>
  );
}

export default Header;
