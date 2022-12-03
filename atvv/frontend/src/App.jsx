import React from "react";
import { Route, Routes, useParams } from 'react-router-dom'

//Styles
import AppGlobalStyle from './app.globalStyle'

//Components
import NavBar from "./components/navbar/navbar";

//Pages
import Home from './pages/home/home.page'
import Clientes from "./pages/clientes/clientes.page";
import CadastroCliente from "./pages/clientes/cadastro/cadastroCliente.page";
import Servicos from "./pages/servicos/servicos.page";
import Produtos from "./pages/produtos/produtos.page";
import Atendimentos from "./pages/atendimentos/atendimentos.page";
import DetalhesCliente from "./pages/clientes/detalhes/detalhesCliente.style";

function App() {

  let buttons = ['Atendimentos','Clientes', 'Serviços', 'Produtos']

  return (
    <>
      <AppGlobalStyle/>
      <NavBar buttons={buttons}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atendimentos" element={<Atendimentos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/cadastro" element={<CadastroCliente />} />
        <Route path="/clientes/detalhes/:id" element={<DetalhesCliente />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </>
 
  );
}

export default App;
