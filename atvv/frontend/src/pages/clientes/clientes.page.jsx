import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import PaginaModal from "../../components/modalRemover/modalExcluir";
import { mockClientes } from "../../mocks/mockClientes.ts";
import { ListaClientes } from "./clientes.defaultStyles";
import {api} from '../../services/api'




function Clientes() {
    const navigate = useNavigate();
    const [clienteSelecionado, setId] = useState(0);

    function abrir(cliente) {
        setId(cliente)
        document.querySelector('.modal').classList.add('show')
    }

    const [clientes, setCliente] = useState([]);

    useEffect(() => {
        async function loadClientes() {
            const response = await api.get("/clientes");
            setCliente(response.data);
        }
        loadClientes();
    }, []);

    let listClientes = clientes.map((cliente) =>{
        return (
            <div key={cliente.cli_codigo}>
                <details >
                    <summary>
                        <b>{cliente.cli_nome}</b>
                    </summary>
                    <div>
                    <button className="editar" onClick={()=>{navigate(`/cliente/editar/${cliente.cli_codigo}`)}} >Editar</button>
                    <button className="excluir"  onClick={() => abrir(cliente)}>Excluir</button>
                        <p><b>Nome social: </b>{cliente.cli_nome_social}</p>
                        <p><b>Gênero: </b>{cliente.cli_genero}</p>
                        <p><b>CPF: </b>{cliente.cli_cpf}</p>
                        <p><b>RG: </b> {cliente.cli_rg}</p>
                        <p><b>Telefone: </b> {`${cliente.cli_telefone}`}</p>
                    </div>
                </details>
            </div>
        )
    })
    
    return (
        <>
            <PaginaModal objeto={clienteSelecionado} tipoObjeto='cliente' />  
            <ListaClientes>
                <h1>Clientes</h1>
                <button className="editar" onClick={()=>{navigate('/clientes/cadastro')}}>Adicionar</button>
                {listClientes}  
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