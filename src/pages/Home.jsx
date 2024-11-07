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
<<<<<<< HEAD
            <Greeting name="Tarik" age={37} isStudent />
=======
            <Greeting name='tarik' age={37} isStudent profeshion="Developer" />
>>>>>>> 6bd75b3623fe0351e044fcff93873d6ec1ceaca6
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
