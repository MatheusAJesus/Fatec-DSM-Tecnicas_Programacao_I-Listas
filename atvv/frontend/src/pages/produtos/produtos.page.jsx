import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import PaginaModal from "../../components/modalRemover/modalExcluir";

import { mockProdutos } from "../../mocks/mockProdutos.ts"
import { ListaProdutos } from './produtos.defaultStyles'
import {api} from '../../services/api'

function Produtos() {
    const navigate = useNavigate();
    const [produtoSelecionado, setProduto] = useState(0);

    function abrir(produto) {
        setProduto(produto)
        document.querySelector('.modal').classList.add('show')
    }

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function loadProdutos() {
            const response = await api.get("/produtos");
            setProdutos(response.data);
        }
        loadProdutos();
    }, []);

    let listProdutos  = produtos.map((produto) =>{
        return (
            <div key={produto.prod_codigo}>
                <details >
                    <summary>
                        <b>{produto.prod_descricao}</b>
                    </summary>
                    <div>
                    <button className="editar" onClick={()=>{navigate(`/produto/editar/${produto.id}`)}}>Editar</button>
                    <button className="excluir" onClick={() => abrir(produto)}>Excluir</button>
                    <p><b>Valor: </b>{`R$ ${produto.prod_valor}`}</p>
                    </div>
                </details>
            </div>
        )
    })        

    return (
        <>
            <PaginaModal objeto={produtoSelecionado} tipoObjeto='produto'/>
            <ListaProdutos>
            <h1>Produtos</h1>
                <button className="editar" onClick={()=>{navigate('/produtos/cadastro')}}>Adicionar</button>
                {listProdutos}  
            </ListaProdutos>
        </>
    )

}

export default Produtos;