import Entrada from "../io/entrada";

import CadastroCliente from "../negocio/clientes/cadastroCliente";
import ListagemClientes from "../negocio/clientes/listagemClientes";
import ModificaCliente from "../negocio/clientes/modificaCliente";
import DeletaCliente from "../negocio/clientes/deletaCliente";


let entrada = new Entrada()

export default function menuCliente(cadastroCliente: CadastroCliente, listagemClientes: ListagemClientes, modificaCliente: ModificaCliente, deletaCliente: DeletaCliente){
    console.log(`---------------------------------------------------------------`)
    console.log(`\nMenu de Clientes`)
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Modificar cliente`);
    console.log(`4 - Apagar cliente`);
    console.log(`5 - Listar clientes por gênero`);
    console.log(`0 - Voltar`);
    let opcaoCliente = entrada.receberNumero(`\nPor favor, escolha uma opção: `)

    switch(opcaoCliente){            
        case 1:
            cadastroCliente.cadastrarClientes()
            console.log(`\nCliente cadastrado com sucesso!\n`)
            break;
        case 2:
            console.log(`\nLista de todos os clientes:`);
            listagemClientes.listarClientes()
            break;
        case 3:
            console.log(`\nModificar cadastro de cliente: `)
            let cpfAModificar = entrada.receberTexto(`Digite o CPF do cliente que quer modificar: `)
            modificaCliente.modificarCliente(cpfAModificar, cadastroCliente)
            break;
        case 4:
            deletaCliente.deletarCliente()
            break;
        case 5:
            listagemClientes.listarClientesGenero();
            break;
        case 0:
            break;
        default:
            console.log(`\nOperação não entendida :(\n`)
    }

}