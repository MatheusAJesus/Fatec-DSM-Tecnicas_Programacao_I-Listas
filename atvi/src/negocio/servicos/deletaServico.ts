import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico";
import Deleta from "../crud_comum/deleta";

export default class DeletaServico extends Deleta{
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new  Entrada
    }

    public deletar(): void {
        let idServicoARemover = this.entrada.receberNumero(`Digite o ID do produto a modificar: `)
        let servicoSelecionado = this.servicos.findIndex(index => index.id === idServicoARemover)
        if(servicoSelecionado == -1){
            console.log('\nServiço não encontrado!\n')
        }else{
            console.log(`\nServiço selecionado: ${this.servicos[servicoSelecionado].nome}`)
            let certeza = this.entrada.receberNumero(`Tem certeza que deseja remover? 1-Sim / 2-Não / 0-Voltar: `)
            switch(certeza){
                case 1:
                    console.log(`\n${this.servicos[servicoSelecionado].nome} foi removido\n`)
                    this.servicos.splice(servicoSelecionado,1)
                    break;
                case 2:
                    console.log(`\n${this.servicos[servicoSelecionado].nome} não foi removido\n`)
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