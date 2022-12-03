import React from "react";

import { mockProdutos } from "../../mocks/mockProdutos.ts"
import { ListaProdutos } from './produtos.defaultStyles'

function Produtos() {
    let produtos = mockProdutos.map(produto =>{
        return (
            <div key={produto.id}>
                <details >
                    <summary>
                        <b>{produto.nome}</b>
                    </summary>
                    <div>
                    <button className="editar" >Editar</button>
                    <button className="excluir">Excluir</button>
                    <p><b>Valor: </b>{`R$ ${produto.valor}`}</p>
                    </div>
                </details>
            </div>
        )
    })        

    return (
        <>
            <ListaProdutos>
            <h1>Produtos</h1>
                <button>Adicionar</button>
                {produtos}  
            </ListaProdutos>
        </>
    )

}

export default Produtos;