import React from "react";

import { ListaAtendimentos } from "./atendimentos.defaultStyles"
import { mockAtendimentos } from "../../mocks/mockAtendimentos.ts"

function Atendimentos() {
        
    let atendimentos = mockAtendimentos.map(atendimento =>{
        return (
            <div key={atendimento.id}>
                <details >
                    <summary>
                        <p><b>Data: </b>{atendimento.dataAtendimento}</p>
                    </summary>
                    <div>
                    <p><b>Cliente: </b>{atendimento.cliente}</p>
                    <div><b>Produtos: </b>{atendimento.produtos.map( produto => {
                        return <p key={produto.id}>{produto.nome}: R${produto.valor.toFixed(2)}</p>
                    })}</div>
                    <div><b>Serviços: </b>{atendimento.servicos.map( servico => {
                        return <p key={servico.id}>{servico.nome}: R${servico.valor.toFixed(2)}</p>
                    })}</div>
                    <br/>
                    <p><b>Valor total: </b>R${atendimento.valorTotal.toFixed(2)}</p>
                    </div>
                </details>
            </div>
        )
    })        

    return (
        <>
            <ListaAtendimentos>
            <h1>Atendimentos</h1>
                <button>Novo Atendimento</button>
                {atendimentos}  
            </ListaAtendimentos>
        </>
    )

}

export default Atendimentos;