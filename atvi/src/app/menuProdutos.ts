import Entrada from "../io/entrada";

import CadastroProduto from "../negocio/produtos/cadastroProduto";
import ListagemProdutos from "../negocio/produtos/listagemProdutos";
import ModificaProduto from "../negocio/produtos/modifcaProduto";
import DeletaProduto from "../negocio/produtos/deletaProduto";

let entrada = new Entrada()

export default function menuProduto(cadastroServico: CadastroProduto, listagemServicos: ListagemProdutos, modifcaServico: ModificaProduto, deletaServico: DeletaProduto){
    console.log(`---------------------------------------------------------------`)
    console.log(`\nMenu de produtos`)
    console.log(`1 - Cadastrar produto`);
    console.log(`2 - Listar todos os produtos`);
    console.log(`3 - Modificar produto`);
    console.log(`4 - Apagar produto`)
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