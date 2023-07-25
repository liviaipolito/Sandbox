import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './style.css';
import api from '../../servicos/api';
import btVoltar from '../../imagens/voltar.png';
import saberMais from '../../imagens/saber-mais.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Link} from 'react-router-dom';
import Cadastro from "../Cadastro/Cadastro";
import { useNavigate } from 'react-router-dom';

const TermsAceiteSchema = z.object({
  poltica: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),

  // politica: z.preprocess(value => value === 'on', z.boolean()),



  // terms: z.string().transform(value => value === 'on'),
  // // politica: z.boolean(),
  // // terms: z.literal(true, {
  // //   errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  // // }),
  // politica: z.literal(true, {
  //   errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  // }),
});

  // TermsAceiteSchema.parse({ terms: "Ludwig" });

  // .refine((fields) => fields.terms == true, {
  //   message: 'Precisa concordar!'
  // });



// type formTerms = z.infer<typeof TermsAceiteSchema>;



function OnboardingPF() {
  const {register, handleSubmit, formState:{errors},} = useForm({resolver:zodResolver(TermsAceiteSchema),});
  // const onSubmit: SubmitHandler<formTerms> = (data) => console.log(data);
  const [output, setOutput] = useState('')
  const [token, setToken] = useState(null)
  const [regdocsResponse, setRegdocsResponse] = useState(null)
  const [regdocsAceite, setRegdocsAceite] = useState(null)
  const navegue = useNavigate();

  useEffect(() => {
    api.getToken()
      .then(token => setToken(token))
      .catch(erro => console.error(erro))
    
    api.getRegdocs(token)
      .then(regdocs => setRegdocsResponse(regdocs))
      .catch(erro => console.error(erro))

    api.postRegdocs(token)
    .then(regdocs => setRegdocsAceite(regdocs))
    .catch(erro => console.error(erro))

  }, [])

  var apisRegsDocs = regdocsResponse + '\n' + regdocsAceite;

  function createUser(data){
    // setOutput(JSON.stringify(data,null,2))
    console.log({data});
    navegue('/cadastro');
  }


  return (
    <div className='conteudo'>
      <div className='titulo'>
        <Link to="/"><img src={btVoltar}/></Link>
        <h2> Termos e politica de privacidade </h2>
      </div>
      <div className='caixa-texto'>
        <div className='caixa-termo'>
          <h4>1. Introdução</h4>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<br></br>
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.<br></br>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.<br></br>
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>       
        </div>
        <div className='popup-register'>
        <Popup trigger={<img src={saberMais} />} position="right center" id="pop">
            <a>Visualizar termos e politica:</a>
            <div><a href='https://lighthouse.dock.tech/docs/cards-and-digital-banking-api-reference/4c121becb0fc8-get-regdocs'>GET/v1/registration</a><br></br>Saiba mais</div>
        </Popup>
        </div> 
      </div>
      <div className='aceite-termos'>
        <h3>Termos de uso e politica de privacidade</h3>

        <form onSubmit = { handleSubmit(createUser)} >
          <div className='termos'>
            <label id=''>Li e concordo com os termos e aceites</label>
            <input type='checkbox' value='DeAcordo1' {...register('terms')}/>
            {errors.terms && <span>{errors.terms.message}</span>}
          </div>

          <div className='privacidade'>
            <label id=''>Li e concordo com a politica de privacidade</label>
            <input type='checkbox'  value='DeAcordo2' {...register('politica')}/>
            {errors.politica && <span>{errors.politica.message}</span>}
          </div>

          <div className='btContinuar'>
          <button type="submit">Continuar</button>

            {/* <button onClick={() => console.log(apisRegsDocs)}><Link to="/cadastro" >Continuar</Link></button> */}
              <Popup trigger={<img src={saberMais} />} position="right center">
              <a id="ref">Aceite os termos:</a>
              <div><a href='https://lighthouse.dock.tech/docs/cards-and-digital-banking-api-reference/dbec903f339c2-agree-regdocs'>POST/v1/agreement</a><br></br>Saiba mais</div>
              </Popup>
          </div>
        </form>
        <pre>{output}</pre>

      </div>
    </div>
    
  );

}


export default OnboardingPF;