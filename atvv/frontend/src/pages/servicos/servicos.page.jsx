import React from "react";

import { mockServicos } from "../../mocks/mockServicos.ts"
import { ListaServicos } from "./servicos.defaultStyles"

function Servicos() {
    let servicos = mockServicos.map(servico =>{
        return (
            <div key={servico.id}>
                <details >
                    <summary>
                        <b>{servico.nome}</b>
                    </summary>
                    <div>
                    <button className="editar" >Editar</button>
                    <button className="excluir">Excluir</button>
                    <p><b>Valor: </b>{`R$ ${servico.valor}`}</p>
                    </div>
                </details>
            </div>
        )
    })        

    return (
        <>
            <ListaServicos>
            <h1>Serviços</h1>
                <button>Adicionar</button>
                {servicos}  
            </ListaServicos>
        </>
    )

}

export default Servicos;