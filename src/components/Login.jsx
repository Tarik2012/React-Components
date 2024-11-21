import React, { useContext } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Header from './Header';
import simulatedUsers from '../assets/simulatedUsers';
import { AuthContext } from '../context/AuthContext';

const Wrapper = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate(); // Inicializa useNavigate

    // Configura useForm
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Función que se ejecuta al enviar el formulario
    const onSubmit = (data) => {
        // Busca al usuario en la lista de usuarios simulados
        const user = simulatedUsers.find(
            (u) => u.username === data.username && u.password === data.password
        );

        if (user) {
            // Si el usuario es válido, muestra un mensaje de éxito
            console.log('¡Autenticación exitosa!');
            // Llama a la función de inicio de sesión del contexto
            login();
            // Redirige al usuario al componente ProductList
            navigate('/ProductList'); // Redirige a la ruta especificada
        } else {
            // Si las credenciales son incorrectas, muestra un mensaje de error
            console.log('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div>
            <Header />
            <h2>Login</h2>
            <h4>user:user1</h4>
            <h4>contraseña:12345</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Campo de Usuario */}
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        id="username"
                        {...register('username', { required: 'El usuario es obligatorio' })}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>

                {/* Campo de Contraseña */}
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: 'La contraseña es obligatoria' })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                {/* Botón de Enviar */}
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

const ResponsiveComponent = () => (
    <Wrapper>
        <Login />
    </Wrapper>
);

export default ResponsiveComponent;
