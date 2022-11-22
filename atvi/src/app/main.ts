import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

import menuCliente from "./menuClientes";
import CadastroCliente from "../negocio/clientes/cadastroCliente";
import ListagemClientes from "../negocio/clientes/listagemClientes";
import ModificaCliente from "../negocio/clientes/modificaCliente";
import DeletaCliente from "../negocio/clientes/deletaCliente";

import menuServico from "./menuServicos";
import CadastroServico from "../negocio/servicos/cadastroServico";
import ListagemServicos from "../negocio/servicos/listagemServicos";
import ModificaServico from "../negocio/servicos/modifcaServico";
import DeletaServico from "../negocio/servicos/deletaServico";

import menuProduto from "./menuProdutos"
import CadastroProduto from "../negocio/produtos/cadastroProduto";
import ListagemProdutos from "../negocio/produtos/listagemProdutos";
import ModificaProduto from "../negocio/produtos/modifcaProduto";
import DeletaProduto from "../negocio/produtos/deletaProduto";

import menuAtendimento from "./menuAtendimento"
import CadastroAtendimento from "../negocio/atendimento/cadastroAtendimento";
import ListagemAtendimento from "../negocio/atendimento/listagemAtendimentos";


console.log(`Bem-vindo ao sistema de gerenciamento do Grupo World Beauty`)
let entrada = new Entrada()
let empresa = new Empresa()

let cadastroCliente = new CadastroCliente(empresa.getClientes, empresa.getGeneros)
let listagemClientes = new ListagemClientes(empresa.getClientes, empresa.getGeneros)
let modificaCliente = new ModificaCliente(empresa.getClientes)
let deletaCliente = new DeletaCliente(empresa.getClientes)

let cadastroServico = new CadastroServico(empresa.getServicos)
let listagemServicos = new ListagemServicos(empresa.getServicos)
let modifcaServico = new ModificaServico(empresa.getServicos)
let deletaServico = new DeletaServico(empresa.getServicos)

let cadastroProduto = new CadastroProduto(empresa.getProdutos)
let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
let modifcaProduto = new ModificaProduto(empresa.getProdutos)
let deletaProduto = new DeletaProduto(empresa.getProdutos)

let cadastroAtendimento = new CadastroAtendimento(empresa.getAtendimentos, empresa.getClientes, empresa.getProdutos, empresa.getServicos,)
let listagemAtendimento = new ListagemAtendimento(empresa.getAtendimentos, empresa.getGeneros)

cadastroCliente.autoCadastrarClientes()
cadastroServico.autoCadastrar()
cadastroProduto.autoCadastrar()
cadastroAtendimento.autoCadastrar()


let execucao = true
while (execucao) {
    console.log(`---------------------------------------------------------------`)
    console.log(`Menu principal:\n`);
    console.log(`1  - Menu Clientes`);
    console.log(`2  - Menu Serviços`);
    console.log(`3  - Menu Produtos`);
    console.log(`4  - Menu Atendimento`);
    console.log(`5  - Listar os 10 clientes que mais consumiram produtos/serviços`);
    console.log(`6  - Listar os 10 clientes que menos consumiram produtos/serviços`);
    console.log(`7  - Listar os produtos mais consumidos`)
    console.log(`8  - Listar os serviços mais consumidos`)
    console.log(`9  - Listar os produtos e serviços mais consumidos por gênero`)
    console.log(`10 - Listar os 5 clientes que mais consumiram em valor (R$)`)

    console.log(`0 - Sair`);

    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            menuCliente(cadastroCliente, listagemClientes, modificaCliente, deletaCliente);
            break;
        case 2:
            menuServico(cadastroServico, listagemServicos, modifcaServico, deletaServico);
            break;
        case 3:
            menuProduto(cadastroProduto, listagemProdutos, modifcaProduto, deletaProduto);
            break;
        case 4:
            menuAtendimento(cadastroAtendimento, listagemAtendimento);
            break;
        case 5:
            console.log('\n10 Clientes que mais consumiram produtos:')
            listagemClientes.consumiram('getProdutosConsumidos','>', 10)
            console.log('--------------------------------------------------------')
            console.log('\n10 Clientes que mais consumiram servicos:')
            listagemClientes.consumiram('getServicosConsumidos','>', 10 )
            console
            break;
        case 6:
            console.log('\n10 Clientes que menos consumiram produtos:')
            listagemClientes.consumiram('getProdutosConsumidos','<', 10)
            console.log('--------------------------------------------------------')
            console.log('\n10 Clientes que menos consumiram servicos:')
            listagemClientes.consumiram('getServicosConsumidos','<', 10)
            console
            break;
        case 7:
            console.log(`\nProdutos mais consumidos`)
            listagemAtendimento.consumidos(empresa.getProdutos, 'produtos')
            break;
        case 8:
            console.log(`\nServicos mais consumidos`)
            listagemAtendimento.consumidos(empresa.getServicos, 'servicos')
            break;
        case 9:
            console.log('\nProdutos: ')
            listagemAtendimento.consumidosGenero('produtos')
            console.log('--------------------------------------------------------')
            console.log('\nServiços:')
            listagemAtendimento.consumidosGenero('servicos')
            break;
        case 10:
            console.log(`\n5 Clientes que mais consumiram em valor (R$):`)
            listagemClientes.consumiram('getValorTotal', '>', 5)
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}