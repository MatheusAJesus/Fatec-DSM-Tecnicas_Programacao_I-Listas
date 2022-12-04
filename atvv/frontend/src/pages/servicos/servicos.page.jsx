import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import PaginaModal from "../../components/modalRemover/modalExcluir";

import { ListaServicos } from "./servicos.defaultStyles"
import {api} from '../../services/api'

function Servicos() {
    const navigate = useNavigate();
    const [servicoSelecionado, setId] = useState(0);

    function abrir(servico) {
        setId(servico)
        document.querySelector('.modal').classList.add('show')
    }

    const [servicos, setServico] = useState([]);

    useEffect(() => {
        async function loadServicos() {
            const response = await api.get("/servicos");
            setServico(response.data);
        }
        loadServicos();
    }, []);

    let listServicos = servicos.map((servico) =>{
        return (
            <div key={servico.serv_codigo}>
                <details >
                    <summary>
                        <b>{servico.serv_descricao}</b>
                    </summary>
                    <div>
                    <button className="editar" onClick={()=>{navigate(`/servico/editar/${servico.serv_codigo}`)}}>Editar</button>
                    <button className="excluir" onClick={() => abrir(servico)}>Excluir</button>
                    <p><b>Valor: </b>{`R$ ${servico.serv_valor}`}</p>
                    </div>
                </details>
            </div>
        )
    })        

    return (
        <>  
            <PaginaModal objeto={servicoSelecionado} tipoObjeto='servico'/>
            <ListaServicos>
            <h1>Serviços</h1>
                <button className="editar" onClick={()=>{navigate('/servicos/cadastro')}}>Adicionar</button>
                {listServicos}  
            </ListaServicos>
        </>
    )

}

export default Servicos;