import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Atendimento{
	public id: number
	public dataAtendimento: Date
	public cliente: string
	public cpfCliente: string
	public generoCliente: string
	public produtos: Array<Produto>
	public qtdProdutos: number
	public servicos: Array<Servico>
	public qtdServicos: number
	public valorTotal: number

	constructor(id: number,dataAtendimento: Date, cliente: string, cpfCliente: string, generoCliente: string,  produtos: Array<Produto>, qtdProdutos: number, servicos: Array<Servico>, qtdServicos: number, valorTotal: number){
		this.id = id
		this.dataAtendimento = dataAtendimento
		this.cliente = cliente
		this.cpfCliente = cpfCliente
		this.generoCliente = generoCliente
		this.produtos = produtos
		this.qtdProdutos = qtdProdutos
		this.servicos = servicos
		this.qtdServicos = qtdServicos
		this.valorTotal = valorTotal
	}
}
