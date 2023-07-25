import './style.css';
import MenuLateral from '../MenuLateral/MenuLateral';
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal';
import {Link} from 'react-router-dom';
import cartaoPrincipal from '../../imagens/cartao-principal.svg';
import Pix from '../../imagens/pix.svg';
import Depositar from '../../imagens/depositar.svg';
import Boleto from '../../imagens/boleto.svg';
import P2P from '../../imagens/p2p.svg';
import QRcode from '../../imagens/qrcode.svg';
import Recarga from '../../imagens/recarga.svg';
import Cobrar from '../../imagens/cobrar.svg';
import TED from '../../imagens/ted.svg';
import openFinance from '../../imagens/finance.svg';
import Freelance from '../../imagens/freelance.svg';
import Salario from '../../imagens/salario.svg';
import Portabilidade2 from '../../imagens/portabilidade2.svg';
import Investimento2 from '../../imagens/investimento2.svg';
import Emprestimo from '../../imagens/emprestimo.svg';
import Setinha from '../../imagens/setinha.svg';
import cartaoDigital from '../../imagens/cartao-digital.svg';
import Ocultar from '../../imagens/ocultar.svg';
import Caixinha from '../../imagens/caixinha.svg';
import Cartoes from '../../imagens/cartoes.svg';
import Faturas from '../../imagens/faturas.svg';
import Suporte2 from '../../imagens/suporte2.svg';

function Principal(){
  return(
    <div>
    <MenuHorizontal/>
    <MenuLateral/>
    <div id='caixa-conteudo'>
      <div className='conteudo'>        
        <div className='esq'>          
          <div className='cartao'>
            <h4 id='titulo-cartao'>Cartão</h4>
            <img src={cartaoPrincipal}/>
          </div>
          <div className='payments-esq'>
            <button><img id='pay'src={Pix}/>Pix</button>
            <button><img id='pay' src={Depositar}/>Depositar</button>
            <button><img id='pay' src={Boleto}/>Boleto</button>
            <button><img id='pay' src={P2P}/>Entre contas</button>
          </div>
          <div className='payments-dir'>
            <button><img id='pay'src={QRcode}/>QR Code</button>
            <button><img id='pay' src={Recarga}/>Recarga</button>
            <button><img id='pay' src={Cobrar}/>Cobrar</button>
            <button><img id='pay' src={TED}/>TED/DOC</button>
          </div>
          <div className='open-finance'>
            <img src={openFinance}/>
            <h5>Conheça o Open Finance</h5>
            <p>É seguro e o passo a passo é <br></br>super simples</p>
            <button>Saiba mais</button>
          </div>          
        </div>
        
        <div className='meio'>
          <h4>Pagamentos Futuros</h4>
          <div className='pag-futuros'>
              <div className='free'>
                <img src={Freelance}/>
                <h5>Freelance</h5>
                <p>Pagamento irregular</p>
                <p id='din'>R$ 900</p>
            </div>
              <div className='salario'>
                <img src={Salario}/>
                <h5>Salário</h5>
                <p>Pagamento regular</p>
                <p id='din'>R$ 3.200</p>
            </div>
          </div>

          <div className='outros-servicos'>
            <div className='portabilidade'>
              <img id='resolucao' src={Portabilidade2}/>
              <h5>Portabilidade</h5>
              <p>Rendimento automático, promoções de cashback e outros serviços.</p>
              <button><img id='setinha' src={Setinha}/></button>
            </div>

            <div className='investimento'>
              <img id='resolucao' src={Investimento2}/>
              <h5 id='portab'>Investimento</h5>
              <p id='portab'>Faça seu dinheiro render mais que a pupança e com segurança.</p>
              <button><img id='setinha' src={Setinha}/></button>
            </div>
            
            <div className='emprestimo'>
              <img id='resolucao'src={Emprestimo}/>
              <h5>Empréstimo</h5>
              <p>Crédito fácil até pra quem está com CPF negativado.</p>
              <button><img id='setinha' src={Setinha}/></button>
            </div>
          </div>        
        </div>

        <div className='dir'>
          <h4>Detalhes da conta</h4>
          <div className='detalhes'>

            <div className='saldo-conta'>
              <h3>Saldo em Conta</h3>
              <p>R$ 1.100</p>
              <button id='btCartao'><img id='imgCartao'src={cartaoDigital}/>Cartão Digital</button>
              <button id='btOcultar'><img id='ocultar' src={Ocultar}/></button>
            </div>

            <div className='cartao-credito'>
              <h3>Cartão de Crédito</h3>
              <h6>Fatura Atual</h6>
              <p id='valor'>R$ 1.100</p>
              <p id='disponivel'>Limite disponivel de: R$ 2.300,00</p>
              <button>Ver extrato</button>
            </div>

            <div className='buttons-detalhes'>
              <div className='caixinha'>
                <button><img src={Caixinha}/></button>
                <p>Caixinha</p>
              </div>
              <div className='cartoes'>
              <Link to="/cartao-virtual"><button><img src={Cartoes}/></button></Link>
                <p>Cartão</p>
              </div>
              <div className='fatura'>
                <Link to="/fatura"><button><img src={Faturas}/></button></Link>
                <p>Fatura</p>
              </div>
              <div className='suporte'>
                <button><img src={Suporte2}/></button>
                <p>Suporte</p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}
export default Principal;