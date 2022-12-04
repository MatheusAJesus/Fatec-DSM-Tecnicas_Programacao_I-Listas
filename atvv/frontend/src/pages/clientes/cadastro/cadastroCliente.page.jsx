import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { mockClientes } from '../../../mocks/mockClientes.ts'
import { Formulario } from "../clientes.defaultStyles"
import {api} from '../../../services/api'


function CadastroCliente(){
	const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        console.log(data);
         api.post('/cadastrarclientes', {
			cli_nome: data.cli_nome,
			  cli_cpf: data.cli_cpf,
			  cli_rg: data.cli_rg,
			  cli_nome_social: data.cli_nome_social,
			  cli_data_cadastro: data.cli_data_cadastro,
			  cli_telefone: data.cli_telefone,
			  cli_genero: data.cli_genero,
        });
        navigate('/clientes');
      };

	return(
		<>
			<Formulario onSubmit={handleSubmit(onSubmit)}>
				<label>
					Nome
				</label>
					<input type="text" name="nome" {...register("nome", { required: true })}/>
				<label>
					Nome Social
				</label>
					<input type="text" name="nomeSocial" {...register("nomeSocial", { required: true })}/>
				<label>
					Gênero
				</label>
					<select name="genero" {...register("genero", { required: true })}>
						<option value="masculino">Masculino</option>
						<option value="feminino">Feminino</option>
						<option selected value="nao informado">Não informado</option>
					</select>
					{/* <input type="text" name="genero" {...register("genero", { required: true })}/> */}
				<label>
					CPF
				</label>
					<input type="number" name="cpf" {...register("cpf", { required: true })}/>
				<label>
					Data emissão CPF
				</label>
					<input type="date" name="dataEmissaoCpf" {...register("dataEmissaoCpf", { required: true })}/>
				<label>
					RG
				</label>
					<input type="number" name="rg" {...register("rg", { required: true })}/>
				<label>
					Data emissão RG
				</label>
					<input type="date" name="dataEmissaoRg" {...register("dataEmissaoRg", { required: true })}/>
				<label>
					DDD
				</label>
					<input type="number" name="DDD" {...register("DDD", { required: true })}/>
				<label>
					Telefone
				</label>
					<input type="number" name="telefone" {...register("telefone", { required: true })}/>
				<div>
					<button className="editar" type="submit">Adicionar</button>
				</div>
			</Formulario>
		</>
	)
}

export default CadastroCliente;