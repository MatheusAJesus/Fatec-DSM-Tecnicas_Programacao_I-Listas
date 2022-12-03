import React from "react";
import { useNavigate } from 'react-router-dom';
import { mockClientes } from "../../mocks/mockClientes.ts";
import { ListaClientes } from "./clientes.defaultStyles";



function Clientes() {
    const navigate = useNavigate();
    let clientes = mockClientes.map(cliente =>{
        return (
            <div key={cliente.cpf}>
                <details >
                    <summary>
                        <b>{cliente.nome}</b>
                    </summary>
                    <div>
                    <button className="editar" >Detalhes</button>
                    <button className="excluir">Excluir</button>
                        <p><b>Nome social: </b>{cliente.nomeSocial}</p>
                        <p><b>Gênero: </b>{cliente.genero}</p>
                        <p><b>CPF: </b>{cliente.cpf}</p>
                        <p><b>RG: </b> {cliente.rg}</p>
                        <p><b>Telefone: </b> {`(${cliente.DDD}) ${cliente.telefone}`}</p>
                    </div>
                </details>
            </div>
        )
    })
    
    return (
        <>
            <ListaClientes>
                <h1>Clientes</h1>
                <button onClick={()=>{navigate('/clientes/cadastro')}}>Adicionar</button>
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