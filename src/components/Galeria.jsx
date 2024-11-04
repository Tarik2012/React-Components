// src/components/Galeria.js
import React from "react";
import { Row, Col, Image } from "antd";
import images from '../assets/imageData';
import './Galeria.css'; // Asegúrate de importar los estilos personalizados
import Header from "./Header";

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

export default Galeria;
