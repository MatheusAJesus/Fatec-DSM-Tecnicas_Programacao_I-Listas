import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Formulario } from "../../clientes/clientes.defaultStyles";
import { useNavigate } from 'react-router-dom';

import { mockServicos } from "../../../mocks/mockServicos.ts"

function EditarServico() {
    const idServico = useParams().id;
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [servicoSelecionado, setServico] = useState([]);

    useEffect(() =>{
        function selecionaServico(){
            mockServicos.map(servico => {
                if(servico.id == idServico){
                    setServico(servico)
                }
             })
        }
        selecionaServico();
    });

    const onSubmit = data =>{
        let nome = data.nome? data.nome: servicoSelecionado.nome
        let valor = data.valor? data.valor: servicoSelecionado.valor

        let servicoEditado = {
            nome: nome,
            valor: valor
        }
        console.log(servicoEditado)
        window.alert('Serviço atualizado com sucesso')
    }

    return(
        <Formulario  onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nome
            </label>
            <input type="text" name="nome" {...register("nome")} placeholder={servicoSelecionado.nome}/>
            <label>
                Valor
            </label>
            <input type="number" name="valor" {...register("valor")} placeholder={servicoSelecionado.valor}/>
            <div>
                <button className="editar" type="submit">Atualizar</button>
            </div>
        </Formulario>
    )
}

export default EditarServico;