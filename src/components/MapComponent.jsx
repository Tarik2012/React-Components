// components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Header from './Header';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const position = [37.1773, -3.5986];


    return (
        <>
            <Header />
            <h2>Hola desde el mapa</h2>
            <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Ubicación de ejemplo.</Popup>
                </Marker>
            </MapContainer>
        </>
    );
};

export default MapComponent;
