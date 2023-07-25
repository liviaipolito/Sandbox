import './style.css';
import Logo from '../../imagens/logo.svg';
import Lupa from '../../imagens/lupa.svg';
import ModoEscuro from '../../imagens/modoEscuro.svg';
import PT from '../../imagens/pt.svg';
import Notificacao from '../../imagens/notificacao.svg';
import Perfil from '../../imagens/perfil.svg';

function MenuHorizontal(){
  return(
    <div className='menu-horizontal'>
      <img src={Logo} id='logo'/>
      
      <div className='pesquisar'>
        <input type='text' placeholder='Pesquisar'/>
        <button><img id='lupa' src={Lupa}/></button>
      </div>
      
      <div className='botoes'>
        <div className='icons'>
          <button><img id='modoEscuro' src={ModoEscuro}/></button>
          <a id='pt-text'>PT</a>
          <button><img id='pt-img' src={PT}/></button>
          <button><img id='notific' src={Notificacao}/></button>
          <button><img id='perfil' src={Perfil}/></button>
        </div>    
      </div>
    </div>
  );
}
export default MenuHorizontal;