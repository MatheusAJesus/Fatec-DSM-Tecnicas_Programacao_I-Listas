import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Formulario } from "../clientes.defaultStyles";

import { mockClientes } from "../../../mocks/mockClientes.ts"

function EditarCliente(){    
    const cpf = useParams().cpf;

    const { register, handleSubmit } = useForm();
    const [clienteSelecionado, setCliente] = useState([]);

    useEffect(() =>{
        function selecionaCliente(){
            mockClientes.map(cliente => {
                if(cliente.cpf === cpf){
                    setCliente(cliente)
                }
             })
        }
        selecionaCliente();
    });
	
	
	const onSubmit = data =>{
        let nome = data.nome? data.nome : clienteSelecionado.nome
        let nomeSocial = data.nomeSocial? data.nomeSocial : clienteSelecionado.nomeSocial
        let genero = data.genero? data.genero : clienteSelecionado.genero
        // let rg = data.rg? data.rg : (clienteSelecionado.rg)
        // let dataEmissaoRg = new Date(data.dataEmissaoRg)
        let DDD = data.DDD? data.DDD : clienteSelecionado.DDD
        let telefone = data.telefone? data.telefone : clienteSelecionado.telefone
        
        let clienteEditado = {
            nome: nome,
            nomeSocial: nomeSocial ,
            genero: genero ,
            // rg: data.rg? data.rg : (clienteSelecionado.rg),
            // dataEmissaoRg: new Date(data.dataEmissaoRg),
            DDD: DDD,
            telefone: telefone,

        }

        console.log(clienteEditado)
		window.alert('Cliente atualizado com sucesso')
	}

	return(
		<>
			<Formulario onSubmit={handleSubmit(onSubmit)}>
				<label>
					Nome
				</label>
					<input type="text" name="nome" {...register("nome")} placeholder={clienteSelecionado.nome}/>
				<label>
					Nome Social
				</label>
					<input type="text" name="nomeSocial" {...register("nomeSocial")} placeholder={clienteSelecionado.nomeSocial}/>
				<label>
					Gênero
				</label>
					<select name="genero" {...register("genero", { required: true })}>
						<option value="masculino">Masculino</option>
						<option value="feminino">Feminino</option>
						<option selected value="nao informado">Não informado</option>
					</select>
					{/* <input type="text" name="genero" {...register("genero")} placeholder={clienteSelecionado.genero}/> */}
				{/* <label>
					RG
				</label>
					<input type="number" name="rg" {...register("Rg")} placeholder={clienteSelecionado.rg}/>
				<label>
					Data emissão RG
				</label>
					<input type="date" name="dataEmissaoRg" {...register("dataEmissaoRg")} placeholder={clienteSelecionado.dataEmissaoRg}/> */}
				<label>
					DDD
				</label>
					<input type="number" name="DDD" {...register("DDD")} placeholder={clienteSelecionado.DDD}/>
				<label>
					Telefone
				</label>
					<input type="number" name="telefone" {...register("telefone")} placeholder={clienteSelecionado.telefone}/>
				<div>
					<button className="editar" type="submit">Atualizar</button>
				</div>
			</Formulario>
		</>
	)
}

export default EditarCliente;
