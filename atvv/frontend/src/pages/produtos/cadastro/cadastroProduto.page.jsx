import React from "react";
import { useForm } from "react-hook-form";
import { Formulario } from "../../clientes/clientes.defaultStyles"
import {api} from '../../../services/api'
import { useNavigate } from 'react-router-dom';


function CadastroProduto(){
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        console.log(data);
         api.post('/cadastrarprodutos', {
            prod_descricao: data.prod_descricao,
            prod_valor: data.prod_valor
        });
        navigate('/produtos');
      };
    
    return(
        <Formulario  onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nome
            </label>
            <input type="text" name="prod_descricao" {...register("prod_descricao", { required: true })}/>
            <label>
                Valor
            </label>
            <input type="number" name="prod_valor" {...register("prod_valor", { required: true })}/>
            <div>
                <button className="editar" type="submit">Adicionar</button>
            </div>
        </Formulario>
    )
}

export default CadastroProduto;