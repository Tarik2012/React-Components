import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from './Header';

// Datos de ejemplo
const data = [
    { project: 'Proyecto A', completed: 80 },
    { project: 'Proyecto B', completed: 60 },
    { project: 'Proyecto C', completed: 90 },
    { project: 'Proyecto D', completed: 10 },
    { project: 'Proyecto e', completed: 20 },
    { project: 'Proyecto f', completed: 80 },
    { project: 'Proyecto g', completed: 100 },
]
const ProjectDashboard = () => {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <Header />
            <h2>Progreso de Tareas y Proyectos</h2>
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="project" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completed" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProjectDashboard;
