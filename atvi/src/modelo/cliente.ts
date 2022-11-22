import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private valorTotal: number
    constructor(nome: string, nomeSocial: string, genero:string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.valorTotal = 0
    }


    //getters
    public get getCpf(): CPF {
        return this.cpf
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public get getValorTotal(): number{
        return this.valorTotal
    }

    //setters
    public set setRg(rg: RG){
        this.rgs.push(rg)
    }

    public set setTelefone(telefone: Telefone){
        this.telefones.push(telefone)
    }

    public set setProdutos(produto: Produto){
        this.produtosConsumidos.push(produto)
    }

    public set setServicos(servico: Servico){
        this.servicosConsumidos.push(servico)
    }

    public set setValor(valor: number){
        this.valorTotal += valor
    }
}