import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const HelmetComponent = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <HelmetComponent title="Página de Ejemplo" description="Esta es una descripción de ejemplo" />
    </Wrapper>
);

export default ResponsiveComponent;
