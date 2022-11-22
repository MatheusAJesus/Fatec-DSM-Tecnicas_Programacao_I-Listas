import Cadastro from "../crud_comum/cadastro";
import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Cliente from "../../modelo/cliente";
import Atendimento from "../../modelo/atendimento";
import { mockAtendimentos } from "../../listas/mockAtendimentos";

export default class CadastroAtendimento extends Cadastro{
	private entrada: Entrada
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private atendimentos: Array<Atendimento>

	constructor(atendimentos: Array<Atendimento>, clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>){
		super()
		this.entrada = new Entrada()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.atendimentos = atendimentos
	}

    //função principal
	public cadastrar(){
        let cpfCliente = this.entrada.receberTexto(`Digite o CPF do cliente para atendimento: `)
        let ultimoIdAtendiemento = this.atendimentos.length == 0? 0 : this.atendimentos[this.atendimentos.length - 1].id
        let idAtendimento = ultimoIdAtendiemento + 1
        let dataAtendimento = new Date()
        let clienteSelecionado = this.clientes.find(cliente => cliente.getCpf.getValor == cpfCliente)
        if(clienteSelecionado != undefined){
            let produtosCliente: Array<Produto> = this.adicionar('produto',this.produtos)
            let servicosCliente: Array<Servico> = this.adicionar('serviço',this.servicos)
            let qtdProdutos = produtosCliente.length
            let qtdServicos = servicosCliente.length
            let valorTotal = 0
            produtosCliente.forEach(produto => valorTotal += produto.valor)
            servicosCliente.forEach(servico => valorTotal += servico.valor)
            
            
            let atendimento = new Atendimento(idAtendimento, dataAtendimento, clienteSelecionado.nome, clienteSelecionado.getCpf.getValor, clienteSelecionado.genero, produtosCliente, qtdProdutos, servicosCliente, qtdServicos, valorTotal)
            this.atendimentos.push(atendimento)
            
            produtosCliente.forEach(produto => clienteSelecionado.setProdutos = produto)
            servicosCliente.forEach(servico => clienteSelecionado.setServicos = servico)
            clienteSelecionado.setValor = valorTotal
            
        }else{
            console.log('Cliente não Encontrado')
            this.cadastrar();
        }
    }

    public autoCadastrar(): void {
        mockAtendimentos.forEach(atendimento => {
            let idAtendimento = atendimento.id
            let dataAtendimento = atendimento.dataAtendimento
            let nome = atendimento.cliente
            let cpf = atendimento.cpfCliente
            let genero = atendimento.generoCliente
            let produtos: Array<Produto> = atendimento.produtos
            let qtdProdutos = atendimento.qtdProdutos
            let servicos: Array<Servico> = atendimento.servicos
            let qtdServicos = atendimento.qtdServicos
            let valorTotal = atendimento.valorTotal
            let atendimentoPronto = new Atendimento(idAtendimento, dataAtendimento, nome, cpf, genero, produtos, qtdProdutos, servicos, qtdServicos, valorTotal)
            this.atendimentos.push(atendimentoPronto)
            let clienteSelecionado = this.clientes.find(cliente => cliente.getCpf.getValor == atendimento.cpfCliente)
            atendimento.produtos.forEach(produto => clienteSelecionado.setProdutos = produto)
            atendimento.servicos.forEach(servico => clienteSelecionado.setServicos = servico)
            clienteSelecionado.setValor = atendimento.valorTotal
        });
    }

    //função auxiliar
    public adicionar(item: string, estoque: Array<Produto | Servico>){
        let adiciona = true
        let listaAtendimento =[]
        while(adiciona){
            let opcaoItem = this.entrada.receberNumero(`Adicionar ${item}? 1-Sim / 2-Não : `)
            switch(opcaoItem){
                case 1:
                    let idItem = this.entrada.receberNumero(`Digite o ID do ${item}: `)
                    let itemEscolhido = estoque.find(itemEstoque => itemEstoque.id == idItem)
                    if(itemEscolhido != undefined){
                        console.log(`${item}: ${itemEscolhido.nome}`)
                        listaAtendimento.push(itemEscolhido)
                        break;
                    }else{
                        console.log(`O ${item} não foi encontrado`)
                        break;
                    }
                case 2:
                    adiciona = false
                    break;
                default:
                    console.log(`\nOperação não entendida :(\n`)
            }
        }
        return listaAtendimento    
    }

}
