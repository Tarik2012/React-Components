import React from 'react';
import styled from 'styled-components';
import { Row, Col, Image } from "antd";
import images from '../assets/imageData';
import './Galeria.css'; // Asegúrate de que este archivo existe
import Header from "./Header";

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Galeria = () => {
    return (
        <>
            <div style={{ padding: '20px' }}>
                <Header />
                <Row gutter={[16, 16]}>
                    {images.map((image) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={image.id}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width="90%"
                                style={{ borderRadius: '8px', marginTop: '30px' }}
                                preview={{
                                    mask: null,
                                }}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <Galeria />
    </Wrapper>
);

export default ResponsiveComponent;
