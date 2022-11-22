import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../crud_comum/cadastro";
import { mockServicos } from "../../listas/mockServicos";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);
        let ultimoId = this.servicos[this.servicos.length - 1].id
        let id = ultimoId + 1
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let valor = this.entrada.receberNumero(`Digite o valor do serviço no padrão 00.00 : `)
        let servico = new Servico(id, nome, valor); 
        this.servicos.push(servico)
        console.log(`\nCadastro concluído!)\n`);
    }

    public autoCadastrar() : void{
        mockServicos.forEach(mockServicos => {
            let id = mockServicos.id
            let nome = mockServicos.nome
            let valor = mockServicos.valor
            let servico = new Servico(id, nome, valor);
            this.servicos.push(servico)
        });
    }
 }
