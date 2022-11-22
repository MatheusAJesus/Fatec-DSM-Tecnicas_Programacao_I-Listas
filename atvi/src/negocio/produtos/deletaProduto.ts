import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto";
import Deleta from "../crud_comum/deleta";

export default class DeletaProduto extends Deleta{
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        let idProdutoARemover = this.entrada.receberNumero(`Digite o ID do produto a modificar: `)
        let produtoSelecionado = this.produtos.findIndex(index => index.id === idProdutoARemover)
        if(produtoSelecionado == -1){
            console.log('\nProduto não encontrado!\n')
        }else{
            console.log(`\nProduto selecionado: ${this.produtos[produtoSelecionado].nome}`)
            let certeza = this.entrada.receberNumero(`Tem certeza que deseja remover? 1-Sim / 2-Não / 0-Voltar: `)
            switch(certeza){
                case 1:
                    console.log(`\n${this.produtos[produtoSelecionado].nome} foi removido\n`)
                    this.produtos.splice(produtoSelecionado,1)
                    break;
                case 2:
                    console.log(`\n${this.produtos[produtoSelecionado].nome} não foi removido\n`)
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