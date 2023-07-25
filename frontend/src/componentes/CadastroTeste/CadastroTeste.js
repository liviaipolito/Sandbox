import React, { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './style.css';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import api from '../../servicos/api';
import OnboardingPF from '../OnboardingPF/OnboardingPF';

const createUserFormSchema = z.object({
  email: z.string().nonempty('O campo email é obrigatorio').email('Formato de email inválido'),
  password: z.string().min(6, 'Precisa de pelo menos 6 caracteres'),
})

// type CreateUserFormData = z.infer<typeof createUserFormSchema>

function Cadastro() {
  const [output, setOutput] = useState('')
  const {register, handleSubmit, formState:{errors}} = useForm ({resolver:zodResolver(createUserFormSchema)})
  const navegue = useNavigate();


  function createUser(data){
    // setOutput(JSON.stringify(data,null,2))
    console.log(JSON.stringify(data,null,2))
    navegue('/');
  }

  return(
    <div className='posicaocad'>
      <div className='caixa-cadastro'>
      <div className='cad-sub'>
          <h2>Complete os campos abaixo para criar uma conta + cartão de crédito</h2>
        </div>

        <form onSubmit={handleSubmit(createUser)}>
          <div className='info-cad'>
            <input type='email' placeholder='Email' {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className='info-cad'>
            <input type='password' placeholder='Senha' {...register('password')}/>
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className='enviar'>
            <button type='submit'> Enviar</button>
          </div>
        </form>
        <pre>{output}</pre>
      </div>

    </div>

  );
}

export default Cadastro;
