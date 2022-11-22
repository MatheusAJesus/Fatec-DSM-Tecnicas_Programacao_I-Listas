import Entrada from "../io/entrada";

import CadastroServico from "../negocio/servicos/cadastroServico";
import ListagemServicos from "../negocio/servicos/listagemServicos";
import ModificaServico from "../negocio/servicos/modifcaServico";
import DeletarServico from "../negocio/servicos/deletaServico";

let entrada = new Entrada()

export default function menuServico(cadastroServico: CadastroServico, listagemServicos: ListagemServicos, modifcaServico: ModificaServico, deletaServico: DeletarServico){
    console.log(`---------------------------------------------------------------`)
    console.log(`\nMenu de serviços`)
    console.log(`1 - Cadastrar serviços`);
    console.log(`2 - Listar todos os serviços`);
    console.log(`3 - Modificar serviços`);
    console.log(`4 - Apagar serviços`)
    console.log(`0 - Voltar`);
    let opcaoServico = entrada.receberNumero(`\nPor favor, escolha uma opção: `)

    switch(opcaoServico){
        case 1:
            cadastroServico.cadastrar()
            break;
        case 2:
            listagemServicos.listar()
            break;
        case 3:
            modifcaServico.modificar()
            break;
        case 4:
            deletaServico.deletar()
            break;
        case 0:
            break;
        default:
            console.log(`\nOperação não entendida :(\n`)
    }
}