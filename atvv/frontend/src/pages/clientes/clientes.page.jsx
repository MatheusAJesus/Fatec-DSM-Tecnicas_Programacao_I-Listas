import React from "react";
import ClientesGlobalStyle from "./clientes.globalStyles";

import { mockClientes } from "../../mocks/mockClientes.ts";
import { ListaClientes } from "./clientes.defaultStyles";

function Clientes() {
        let clientes = mockClientes.map(cliente =>{
            return (
                <div key={cliente.cpf}>
                    <details >
                        <summary>
                            <b>{cliente.nome}</b>
                        </summary>

                        <div>
                        <button className="editar">Editar</button>
                        <button className="excluir">Excluir</button>
                            <p><b>Nome social: </b>{cliente.nomeSocial}</p>
                            <p><b>Gênero: </b>{cliente.genero}</p>
                            <p><b>CPF: </b>{cliente.cpf}</p>
                            <p><b>RG: </b> {cliente.rg}</p>
                            <p><b>Telefone: </b> {`(${cliente.DDD})-${cliente.telefone}`}</p>
                        </div>
                    </details>
                </div>
            )
        })
    return (
        <>
            <ClientesGlobalStyle />
            <ListaClientes>
                <h1>Clientes</h1>
                <button>Adicionar</button>
                {clientes}  
            </ListaClientes>
        </>
    )

}

export default Clientes;
/*

        nome: 'Matheus',
        nomeSocial: 'Matheus',
        genero:'masculino',
        cpf: '1234567890',
        dataEmissaoCpf: '12/05/2000',
        rg: '123456780',
        dataEmissaoRg: '20/10/2005',
        DDD: '12',
        telefone: '997979797',
        produtosConsumidos:[],
        servicosConsumidos:[]
*/