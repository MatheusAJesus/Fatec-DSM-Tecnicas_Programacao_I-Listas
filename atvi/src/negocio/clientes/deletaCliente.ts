import Deleta from "./deleta";
import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente" 

export default class DeletaCliente extends Deleta{
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new  Entrada
    }

    public deletarCliente(): void {
        let cpf = this.entrada.receberTexto(`Digite o CPF do cliente à remover: `)
        let clienteARemover = this.clientes.findIndex(index => index.getCpf.getValor === cpf)
        if(clienteARemover == -1){
            console.log('\nCliente não encontrado!\n')
        }else{
            console.log(`\nCliente selecionado: ${this.clientes[clienteARemover].nome}`)
            let certeza = this.entrada.receberNumero(`Tem certeza que deseja remover? 1-Sim / 2-Não / 0-Voltar: `)
            switch(certeza){
                case 1:
                    console.log(`\n${this.clientes[clienteARemover].nome} foi removido\n`)
                    this.clientes.splice(clienteARemover,1)
                    break;
                case 2:
                    console.log(`\n${this.clientes[clienteARemover].nome} não foi removido\n`)
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