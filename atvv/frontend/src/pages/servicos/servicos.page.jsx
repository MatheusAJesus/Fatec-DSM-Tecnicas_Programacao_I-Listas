import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

import PaginaModal from "../../components/modalRemover/modalExcluir";

import { mockServicos } from "../../mocks/mockServicos.ts"
import { ListaServicos } from "./servicos.defaultStyles"

function Servicos() {
    const navigate = useNavigate();
    const [servicoSelecionado, setId] = useState(0);

    function abrir(servico) {
        setId(servico)
        document.querySelector('.modal').classList.add('show')
    }

    let servicos = mockServicos.map(servico =>{
        return (
            <div key={servico.id}>
                <details >
                    <summary>
                        <b>{servico.nome}</b>
                    </summary>
                    <div>
                    <button className="editar" onClick={()=>{navigate(`/servico/editar/${servico.id}`)}}>Editar</button>
                    <button className="excluir" onClick={() => abrir(servico)}>Excluir</button>
                    <p><b>Valor: </b>{`R$ ${servico.valor}`}</p>
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
                {servicos}  
            </ListaServicos>
        </>
    )

}

export default Servicos;