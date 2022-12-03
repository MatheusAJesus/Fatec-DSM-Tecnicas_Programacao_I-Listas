import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

import PaginaModal from "../../components/modalRemover/modalExcluir";

import { mockProdutos } from "../../mocks/mockProdutos.ts"
import { ListaProdutos } from './produtos.defaultStyles'

function Produtos() {
    const navigate = useNavigate();
    const [produtoSelecionado, setProduto] = useState(0);

    function abrir(produto) {
        setProduto(produto)
        document.querySelector('.modal').classList.add('show')
    }

    let produtos = mockProdutos.map(produto =>{
        return (
            <div key={produto.id}>
                <details >
                    <summary>
                        <b>{produto.nome}</b>
                    </summary>
                    <div>
                    <button className="editar" onClick={()=>{navigate(`/produto/editar/${produto.id}`)}}>Editar</button>
                    <button className="excluir" onClick={() => abrir(produto)}>Excluir</button>
                    <p><b>Valor: </b>{`R$ ${produto.valor}`}</p>
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
                {produtos}  
            </ListaProdutos>
        </>
    )

}

export default Produtos;