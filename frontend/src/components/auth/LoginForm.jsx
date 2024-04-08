import React from 'react'
import {Button, Input} from '@nextui-org/react'
import { useState } from 'react';
export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target; 
    const username = form.elements['email'].value; 
    const password = form.elements['password'].value; 

    if(username.trim() == ''  || password.trim() ==''){
      setErrorMessage('Por favor, ingresa un nombre de usuario y contraseña válidos.'); 
      return;

    }
    //Store del Auth
    console.log("Autenticando")

    
  }
  return (
      <div className='login__form'>
        <h3 className=' font-bold text-2xl mb-4'>Inicio Sesion</h3>
        <form noValidate onSubmit={handleSubmit} className='space-y-4'>
          <Input
            name='email'
            isRequired
            type='email'
            size='sm'
            label='Correo electronico'

          />
          <Input
            name='password'
            type='password'
            isRequired
            size='sm'
            label="Contrasena"
          />
          <Button
            type='submit'
            fullWidth
            className='btn-primary'
          >Inicio Sesion</Button>

        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
  )
}
