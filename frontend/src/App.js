import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OnboardingPF from './componentes/OnboardingPF/OnboardingPF';
import Cadastro from './componentes/Cadastro/Cadastro';
import Principal from "./componentes/Principal/Principal";
import CadastroTeste from './componentes/CadastroTeste/CadastroTeste';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/onboarding' element={<OnboardingPF />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/cadastroTeste' element={<CadastroTeste />} />
      </Routes>
    </Router>
);
}

export default App;