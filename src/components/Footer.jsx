import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const ContainerFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 16px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
    return (
        <ContainerFooter>
            <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        </ContainerFooter>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <Footer />
    </Wrapper>
);

export default ResponsiveComponent;
