import Entrada from "../../io/entrada";

import Produto from "../../modelo/produto";
import Modifica from "../crud_comum/modifica";


export default class ModificaProduto extends Modifica {
    private produtos: Array<Produto>
    private entrada : Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public modificar(): void {
        let idProdutoAModificar = this.entrada.receberNumero(`Digite o ID do produto a modificar: `)
        let produtoSelecionado = this.produtos.findIndex(index => index.id === idProdutoAModificar)
        if(produtoSelecionado == -1){
        console.log('\nProduto não encontrado!\n')
        }else{
            console.log('\nProduto selecionado, o que deseja alterar? ')
            console.log(`1 - Nome: ${this.produtos[produtoSelecionado].nome}`)
            console.log(`2 - Valor: ${this.produtos[produtoSelecionado].valor}`)
            console.log(`0 - Voltar`)
            let campoAAlterar = this.entrada.receberNumero(`Digite uma opção: `)
            switch(campoAAlterar){
                case 1:
                    let novoNome = this.entrada.receberTexto(`Digite um novo nome para o produto: `)
                    this.produtos[produtoSelecionado].nome = novoNome
                    console.log('\nNome alterado\n')
                    break;
                case 2:
                    let novoValor = this.entrada.receberNumero(`Digite um novo valor para o produto no padrão 00.00: `)
                    this.produtos[produtoSelecionado].valor = novoValor
                    console.log('\nValor alterado\n')
                    break;
                case 0:
                    break;
                default:
                    console.log(`\nOperação não entendida :(\n`)
                    break;
            }
        }
    }
}
