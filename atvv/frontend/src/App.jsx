import React from "react";
import { Route, Routes } from 'react-router-dom'

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
import EditarCliente from "./pages/clientes/editar/editarCliente.page";
import CadastroProduto from "./pages/produtos/cadastro/cadastroProduto.page";
import CadastroServico from "./pages/servicos/cadastro/cadastroServico.page";
import EditarProduto from "./pages/produtos/editar/editarProduto.page";
import EditarServico from "./pages/servicos/editar/editarServico.page";

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
        <Route path="/cliente/editar/:cpf" element={<EditarCliente/>} component={EditarCliente}/>

        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servicos/cadastro" element={<CadastroServico />} />
        <Route path="/servico/editar/:id" element={<EditarServico/>} component={EditarServico}/>

        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/cadastro" element={<CadastroProduto />} />
        <Route path="/produto/editar/:id" element={<EditarProduto/>} component={EditarProduto}/>
      </Routes>
    </>
 
  );
}

export default App;
