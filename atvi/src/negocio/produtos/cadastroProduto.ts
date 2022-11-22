import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../crud_comum/cadastro";
import { mockProdutos } from "../../listas/mockProdutos";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }


    
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produtos`);
        let ultimoId = this.produtos[this.produtos.length - 1].id
        let id = ultimoId + 1
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let valor = this.entrada.receberNumero(`Digite o valor do produto no padrão 00.00 : `)
        let produto = new Produto(id, nome, valor); 
        this.produtos.push(produto)
        console.log(`\nCadastro concluído!:)\n`);
    }

    public autoCadastrar(): void{
        mockProdutos.forEach(mockProduto => {
            let id = mockProduto.id
            let nome = mockProduto.nome
            let valor = mockProduto.valor
            let produto = new Produto(id, nome, valor);
            this.produtos.push(produto)
        });
    }
 }
