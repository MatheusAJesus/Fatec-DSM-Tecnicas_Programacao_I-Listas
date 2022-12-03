import React from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';

import { mockClientes } from '../../../mocks/mockClientes.ts'
import { Formulario } from "../clientes.defaultStyles"


function CadastroCliente(){
	// const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	
	const onSubmit = data =>{
		console.log(data.genero)
		mockClientes.push(
			{
				nome: data.name,
				nomeSocial: data.nomeSocial,
				genero: data.genero,
				cpf: data.cpf,
				dataEmissaoCpf: new Date(data.dataEmissaoCpf),
				rg: data.rg,
				dataEmissaoRg: new Date(data.dataEmissaoRg),
				DDD: data.DDD,
				telefone: data.telefone,
				produtosConsumidos:[],
				servicosConsumidos:[]
			},
		)
		window.alert('Cliente cadastrado com sucesso')
	}

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