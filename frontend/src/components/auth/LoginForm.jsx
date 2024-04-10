import React from 'react'
import {Button, Input} from '@nextui-org/react'
import { useState } from 'react';
import { toast } from 'sonner';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false) 
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setIsLoading(true)
    const form = e.target; 
    const username = form.elements['email'].value; 
    const password = form.elements['password'].value; 

    if(username.trim() == ''  || password.trim() ==''){
      toast.error('Todos los campos son obligatorios')
      setIsLoading(false)
      return;

    }
    //Store del Auth
    setIsLoading(false)
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
            isLoading= {isLoading}
            type='submit'
            fullWidth
            className='btn-primary'
          >Inicio Sesion</Button>

        </form>
      </div>
  )
}
