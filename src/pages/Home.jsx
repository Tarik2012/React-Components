import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Greeting from '../components/PropTypes';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Home = () => {
    return (
        <>
            <Header />
            <Greeting name="Tarik" age={37} isStudent />
            <Footer />
        </>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <Home />
    </Wrapper>
);

export default ResponsiveComponent;
