import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import './style.css';
// import cadastroimg from '../../imagens/cadastroimg.jpg';
// import Logo from '../../imagens/logodock.jpg';
// import { useNavigate } from 'react-router-dom';
import api from '../../servicos/api';

function Cadastro() {
  const [token, setToken] = useState(null)
  const [documento, setDocumento] = useState('');
  const [nome, setNome] = useState('');
  // const baseUrl = api.baseUrl;

  useEffect(() => {
    api.getToken()
      .then(token => setToken(token))
      .catch(erro => console.error(erro))
    }, [])

  function enviar(){
    console.log(token)
    let corpo = JSON.stringify({
      document: documento,
      name: nome,

    })
    const requisicao = {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': (token)
      },
      body: corpo
    }
    fetch('http://localhost:8080/v2/individuals', requisicao)
      .then(resposta => {
        if (resposta.ok) {
            return resposta.json()
        }
      })
      .catch(erro => {
          console.error(erro)
          throw erro
      })
  }

return (
    <div className='posicaocad'>
      <div className='caixa-cadastro'>
      <div className='cad-sub'>
          <h2>Complete os campos abaixo para criar uma conta + cartão de crédito</h2>
        </div>


        <form>
        <div className='info-cad'>
          <input type='number' name='documento' placeholder='Documento' value={documento} onChange={e => setDocumento(e.target.value)} />
        </div>
        <div className='info-cad'>
          <input type='text' name='nome' placeholder='Nome Completo' value={nome} onChange={e => setNome(e.target.value)}/>
        </div>
        </form>


        <div className='enviar'>
          {/* <button id='btEnviar' onClick={() => enviar()}>Enviar</button> */}
          <button id='submit' onClick={() => enviar()}>Enviar</button>
        </div>
      </div>

    </div>
  );
}


export default Cadastro;