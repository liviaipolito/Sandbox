import './style.css';
import VisaoGeral from '../../imagens/visaoGeral.svg';
import Mensagem from '../../imagens/msg.svg';
import Pagamento from '../../imagens/pagamentos.svg';
import Estatistica from '../../imagens/estatistica.svg';
import Configuracao from '../../imagens/configuracao.svg';
import Sair from '../../imagens/sair.svg';
import { Link } from 'react-router-dom';

function MenuLateral(){
  return(
   <div className='menu-lateral'>
      <div className='sup'>
        <button id='btGeral'>
          <img id='geral' src={VisaoGeral}/>  
          <Link to="/principal" id='link'><a id='tgeral'>Visão Geral</a></Link>
        </button>  
        <button id='btMensagem'>
          <img id='msg' src={Mensagem} />
          <Link to="/onboarding" id='link'><a>Onboarding</a></Link>
        </button>
        <button id='btPagamentos'>
          <img id='pagamento' src={Pagamento}/>
            <a>Pagamentos</a>
        </button>
        <button id='btEstatisticas'>
          <img id='estatisticas' src={Estatistica}/>
            <a>Estatísticas</a>
        </button>
      </div> 
      <div className='inf'>
        <button id='btConfig'>
          <img id='config' src={Configuracao}/>
          <a>Configurações</a>
        </button> 
        <button id='btSair'>
          <img id='sair' src={Sair}/>
          <Link to="/" id='link'><a>Sair</a></Link>
        </button>
      </div>
    </div>

  );
}
export default MenuLateral;