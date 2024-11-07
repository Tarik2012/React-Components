import React, { createContext, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <AuthProvider>
            {/* Aquí puedes incluir contenido que utilice el contexto de autenticación */}
            <div>Contenido protegido o acceso a funcionalidades.</div>
        </AuthProvider>
    </Wrapper>
);

export default ResponsiveComponent;
