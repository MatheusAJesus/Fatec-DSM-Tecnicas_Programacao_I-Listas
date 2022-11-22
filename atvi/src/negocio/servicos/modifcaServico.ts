import Entrada from "../../io/entrada";

import Servico from "../../modelo/servico";
import Modifica from "../crud_comum/modifica";


export default class ModificaServico extends Modifica {
    private servicos: Array<Servico>
    private entrada : Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public modificar(): void {
        let idServicoAModificar = this.entrada.receberNumero(`Digite o ID do produto a modificar: `)
        let servicoSelecionado = this.servicos.findIndex(index => index.id === idServicoAModificar)
        if(servicoSelecionado == -1){
        console.log('\nServico não encontrado!\n')
        }else{
            console.log('\nServiço selecionado, o que deseja alterar? ')
            console.log(`1 - Nome: ${this.servicos[servicoSelecionado].nome}`)
            console.log(`2 - Valor: ${this.servicos[servicoSelecionado].valor}`)
            console.log(`0 - Voltar`)
            let campoAAlterar = this.entrada.receberNumero(`Digite uma opção: `)
            switch(campoAAlterar){
                case 1:
                    let novoNome = this.entrada.receberTexto(`Digite um novo nome para o serviço: `)
                    this.servicos[servicoSelecionado].nome = novoNome
                    console.log('\nNome alterado\n')
                    break;
                case 2:
                    let novoValor = this.entrada.receberNumero(`Digite um novo valor para o serviço no padrão 00.00: `)
                    this.servicos[servicoSelecionado].valor = novoValor
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
