import React,{useState} from "react";
import { useForm } from "react-hook-form";

import { Formulario } from "../../clientes/clientes.defaultStyles"
import {mockClientes} from "../../../mocks/mockClientes.ts"
import {mockProdutos} from "../../../mocks/mockProdutos.ts"
import {mockServicos} from "../../../mocks/mockServicos.ts"


function NovoAtendimento(){
    const { register, handleSubmit } = useForm();
    const [produtoAdd, setProduto] = useState([])
    const [servicoAdd, setServico] = useState([])

    const onSubmit = data =>{
        if(data.cliente != "false" && data.servico != "false" && data.produto != "false"){
        window.alert('Novo atendimento cadastrado '+data.cliente+data.produto+data.servico)
        }else{
            window.alert('Preencha todos os campos')
        }
    }

    function adicionaServico(){
        let idServico = document.getElementById('servico').value
        let qtd = document.getElementsByName('qtdServico').value
    }

    function adicionaProduto(){
        let idProduto = document.getElementById('produto').value
        let qtd = document.getElementsByName('qtdProduto').value
    }

    let clientes = mockClientes.map(cliente =>{
        return (
            <option value={cliente.cpf} key={cliente.cpf}>{cliente.nome}</option>
        )
    })

    let produtos = mockProdutos.map(produto =>{
        return (
            <option value={produto.id} key={produto.id}>{produto.nome}</option>
        )
    })

    let servicos = mockServicos.map(servico =>{
        return (
            <option value={servico.id} key={servico.id}>{servico.nome}</option>
        )
    })


    return(
        <Formulario onSubmit={handleSubmit(onSubmit)}>
            <label>
                Cliente
            </label>
            <select name="cliente" {...register("cliente", { required: true })}>
                <option value="false">Escolha uma opção</option>
                {clientes}
            </select>
            <label>
                Produto
            </label>
            <select name="produto" {...register("produto", { required: true })}>
                <option value="false">Escolha uma opção</option>
                {produtos}
            </select>
            <div>
                <input type="number" name="qtdProduto" placeholder="Quantidade"/>
                <input type="button" className="editar" onClick={adicionaProduto} value="+" style={{cursor:'pointer'}}/>
            </div>
            <label>
                Serviço
            </label>
            <select name="servico" id="servico"{...register("servico", { required: true })}>
                <option value="false">Escolha uma opção</option>
                {servicos}
            </select>
            <div>
                <input type="number" name="qtdServico" placeholder="Quantidade" />
                <input type="button" className="editar" onClick={adicionaServico} value="+" style={{cursor:'pointer'}}/>
            </div>
            <div>
                <button className="editar" type="submit">Adicionar</button>
            </div>
        </Formulario>
    )

}

export default NovoAtendimento;