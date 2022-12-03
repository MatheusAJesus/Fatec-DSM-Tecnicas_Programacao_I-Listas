import React from "react";
import { useForm } from "react-hook-form";
import { Formulario } from "../../clientes/clientes.defaultStyles"


function CadastroServico(){
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        window.alert('Servico cadastrado com sucesso')
    }

    
    return(
        <Formulario  onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nome
            </label>
            <input type="text" name="nome" {...register("nome", { required: true })}/>
            <label>
                Valor
            </label>
            <input type="number" name="valor" {...register("valor", { required: true })}/>
            <div>
                <button className="editar" type="submit">Adicionar</button>
            </div>
        </Formulario>
    )
}

export default CadastroServico;
