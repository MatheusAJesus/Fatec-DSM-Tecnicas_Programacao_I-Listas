import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Atendimento from "./atendimento"
export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private atendimentos: Array<Atendimento>
    private generosCadastrados: Array<string>

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.atendimentos = []
        this.generosCadastrados = []

    }


    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }

    public get getAtendimentos(){
        return this.atendimentos
    }

    public get getGeneros(){
        return this.generosCadastrados
    }
}