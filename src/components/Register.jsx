import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Register = () => {
    return (
        <>
            <Header />
            <h2>Hola desde Register</h2>
        </>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <Register />
    </Wrapper>
);

export default ResponsiveComponent;
