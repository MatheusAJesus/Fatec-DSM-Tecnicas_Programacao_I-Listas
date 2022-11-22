import Entrada from "../io/entrada";

import CadastroAtendimento from "../negocio/atendimento/cadastroAtendimento";
import ListagemAtendimento from "../negocio/atendimento/listagemAtendimentos";


let entrada = new Entrada()

export default function menuAtendimento(cadastrarAtendimento: CadastroAtendimento, listagemAtendimento: ListagemAtendimento){
    console.log(`---------------------------------------------------------------`)
    console.log(`\nMenu de Atendimento`)
    console.log(`1 - Novo Atendimento`);
    console.log(`2 - Listar todos os Atendimentos`);
    console.log(`0 - Voltar`);
    let opcaoAtendimento = entrada.receberNumero(`\nPor favor, escolha uma opção: `)
	
    switch(opcaoAtendimento){
        case 1:
            cadastrarAtendimento.cadastrar();
            break;
        case 2:
            listagemAtendimento.listar();
        case 0:
            break;
        default:
            console.log(`\nOperação não entendidan\n`)
            break;
        
    }





}