import React from "react";
import { useForm } from "react-hook-form";
import { Formulario } from "../../clientes/clientes.defaultStyles"
import {api} from '../../../services/api'
import { useNavigate } from 'react-router-dom';


function CadastroServico(){

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        console.log(data);
         api.post('/cadastrarservicos', {
            serv_descricao: data.serv_descricao,
            serv_valor: data.serv_valor
        });
        navigate('/servicos');
      };

    
    return(
        <Formulario  onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nome
            </label>
            <input type="text" name="serv_descricao" {...register("serv_descricao", { required: true })}/>
            <label>
                Valor
            </label>
            <input type="number" name="serv_valor" {...register("serv_valor", { required: true })}/>
            <div>
                <button className="editar" type="submit">Adicionar</button>
            </div>
        </Formulario>
    )
}

export default CadastroServico;
