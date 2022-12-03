import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Formulario } from "../../clientes/clientes.defaultStyles";
import { useNavigate } from 'react-router-dom';

import { mockProdutos } from "../../../mocks/mockProdutos.ts"

function EditarProduto() {
    const idProduto = useParams().id;
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [produtoSelecionado, setProduto] = useState([]);

    useEffect(() =>{
        function selecionaProduto(){
            mockProdutos.map(produto => {
                if(produto.id == idProduto){
                    setProduto(produto)
                }
             })
        }
        selecionaProduto();
    });

    const onSubmit = data =>{
        let nome = data.nome? data.nome: produtoSelecionado.nome
        let valor = data.valor? data.valor: produtoSelecionado.valor

        let produtoEditado = {
            nome: nome,
            valor: valor
        }
        console.log(produtoEditado)
        window.alert('Produto atualizado com sucesso')
    }

    return(
        <Formulario  onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nome
            </label>
            <input type="text" name="nome" {...register("nome")} placeholder={produtoSelecionado.nome}/>
            <label>
                Valor
            </label>
            <input type="number" name="valor" {...register("valor")} placeholder={produtoSelecionado.valor}/>
            <div>
                <button className="editar" type="submit">Atualizar</button>
            </div>
        </Formulario>
    )
}

export default EditarProduto;