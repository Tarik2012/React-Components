import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Header from './Header';

// Componente Wrapper
const Wrapper = styled.div`
  padding: 20px;               /* Espaciado interior */
  /* Puedes añadir más estilos si es necesario */
`;

// Contenedor principal para centrar el formulario y ocupar todo el ancho
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;                /* Ancho completo del viewport */
  min-height: 100vh;
  background-color: #f4f7f9;
  padding: 20px;
  box-sizing: border-box;       /* Asegura que el padding no afecte el ancho */
`;

// Formulario con un ancho mayor y sombra
const Form = styled.form`
  width: 100%;
  max-width: 800px;             /* Ancho máximo más amplio */
  padding: 30px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;       /* Asegura que el padding no afecte el ancho */
`;

// Grupo de campos con margen inferior
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

// Etiqueta de cada campo
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333333;
  font-size: 14px;
`;

// Campo de entrada
const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

// Área de texto para mensajes
const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  resize: vertical;
  transition: border-color 0.3s;
  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

// Botón de envío
const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: #4a90e2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #357ab8;
  }
`;

// Mensaje de error
const ErrorMessage = styled.span`
  display: block;
  margin-top: 5px;
  color: #e63946;
  font-size: 13px;
`;

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'service_gustb2m',        // Tu Service ID
      'template_32agu8b',       // Tu Template ID
      {
        to_name: 'Recipient',        // Nombre fijo o variable
        from_name: data.name,        // Nombre del remitente
        from_email: data.email,      // Correo electrónico del remitente
        message: data.message        // Mensaje del formulario
      },
      'fvnQl0AwI21ueRFZz'             // Tu User ID
    )
      .then((result) => {
        console.log('Email enviado:', result.text);
        reset(); // Resetea el formulario después de enviarlo
        alert('¡Correo enviado con éxito!');
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error.text);
        alert('Hubo un error al enviar el correo');
      });
  };

  return (
    <>
      <Header />
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              {...register('name', { required: 'Nombre es requerido' })}
              type="text"
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Correo Electrónico</Label>
            <Input
              {...register('email', {
                required: 'Correo electrónico es requerido',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Formato de correo inválido'
                }
              })}
              type="email"
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Mensaje</Label>
            <Textarea
              {...register('message', { required: 'Mensaje es requerido' })}
              rows="4"
            />
            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
          </FormGroup>

          <Button type="submit">Enviar</Button>
        </Form>
      </FormContainer>
    </>
  );
};

const ResponsiveComponent = () => (
  <Wrapper>
    <ContactForm />
  </Wrapper>
);

export default ResponsiveComponent;
