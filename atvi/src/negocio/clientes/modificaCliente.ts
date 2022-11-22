import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente" 
import Telefone from "../../modelo/telefone"
import RG from "../../modelo/rg"
import Modifica from "./modifica"
import CadastroCliente from "./cadastroCliente"


export default class ModificaCliente extends Modifica {
    private clientes: Array<Cliente>
    private entrada: Entrada

    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }   

    public modificarCliente(cpf: string, comporData: CadastroCliente): void {
        try{
            let posicao = this.clientes.findIndex(index => index.getCpf.getValor === cpf);
            let cliente = this.clientes[posicao]
            console.log(`-------------------------------------------------------------------------`)
            console.log(`Cliente selecionado:`)
            console.log(`   Nome: ${cliente.nome}`) 
            console.log(`   CPF: ${cliente.getCpf.getValor}`)
            console.log(`   Cliente desde: ${cliente.getDataCadastro.toLocaleDateString()}\n`)
            console.log(`O que deseja alterar?\n`)
            console.log(`1 - Nome: ${cliente.nome}`)
            console.log(`2 - Nome social: ${cliente.nomeSocial}`)
            console.log(`3 - Genero: ${cliente.genero}`)

            console.log('4 - Rgs:')
                cliente.getRgs.forEach(rg => {
                    console.log('   '+rg.getValor)
                });

            console.log('5 - Telefones:') 
                cliente.getTelefones.forEach(telefone => {
                    console.log('   '+telefone.getDdd+'-'+telefone.getNumero)
                });
            console.log('\n0 - Voltar ao menu principal')
            console.log(`-------------------------------------------------------------------------`)

            let campoAAlterar = this.entrada.receberNumero(`Digite uma opção: `)
            switch(campoAAlterar){
                case 1:
                    let novoNome = this.entrada.receberTexto(`Digite o novo Nome: `)
                    cliente.nome = novoNome
                    break;
                case 2:
                    let novoNomeSocial = this.entrada.receberTexto(`Digite o novo Nome Social: `)
                    cliente.nomeSocial = novoNomeSocial
                case 3:
                    let novoGenero = this.entrada.receberTexto(`Digite o novo Gênero: `)
                    cliente.genero = novoGenero
                case 4:
                    console.log(`1 - Adicionar novo RG`)
                    console.log(`2 - Remover um RG`)
                    let opcaoRgs = this.entrada.receberNumero(`Digite uma opção: `)
                    switch(opcaoRgs){
                        case 1: 
                            let valorRg = this.entrada.receberTexto(`Digite o novo RG: `)
                            let dataRg = comporData.comporDataDocumento('RG')
                            let Rg = new RG(valorRg, dataRg)
                            cliente.setRg = Rg
                            console.log('\nRG adicionado\n')
                            break;
                        case 2:
                            let RgParaRemover = this.entrada.receberTexto(`Digite o número do RG:`)
                            let posicaoDoRg = cliente.getRgs.findIndex(index => index.getValor === RgParaRemover)
                            if(posicaoDoRg == -1){
                                console.log('\nRG não encontrado\n')
                            }else{
                                cliente.getRgs.splice(posicaoDoRg, 1)
                                console.log(`\nRG removido\n`)
                            }
                            break;
                    }
                    break;

                case 5:
                    console.log(`1 - Adicionar novo telefone`)
                    console.log(`2 - Remover um telefone`)
                    let opcaoTelefones = this.entrada.receberNumero(`Digite uma opção: `)
                    switch(opcaoTelefones){
                        case 1: 
                            let novoDDD = this.entrada.receberTexto(`Digite o novo DDD: `)
                            let novoTelefone = this.entrada.receberTexto(`Digite o novo Telefone: `)
                            let telefone = new Telefone(novoDDD, novoTelefone)
                            cliente.setTelefone = telefone
                            console.log('\nTelefone adicionado\n')
                            break;
                            7
                        case 2:
                            let telefoneParaRemover = this.entrada.receberTexto(`Digite o telefone sem o DDD:`)
                            let posicaoDoTelefone = cliente.getTelefones.findIndex(index => index.getNumero === telefoneParaRemover)
                            if(posicaoDoTelefone == -1){
                                console.log('\nTelefone não encontrado\n')
                            }else{
                                cliente.getTelefones.splice(posicaoDoTelefone, 1)
                                console.log(`\nTelefone removido\n`)
                            }
                            break;
                    }
                    break;

                case 0:
                    break;
            }
        
        }catch{
            console.log('\nCPF não encontrado, o que quer fazer agora\n?')
            console.log('1 - Tentar novamente')
            console.log('0 - voltar para menu principal\n')
            let opcaoSeNaoEncontrar = this.entrada.receberNumero(`Digite uma opção: `)
            switch(opcaoSeNaoEncontrar){
                case 1:
                    let cpf = this.entrada.receberTexto(`Digite um CPF válido: `)
                    this.modificarCliente(cpf, comporData)
                    break;
                case 0:
                    break
                default:
                    console.log(`\nOperação não entendida :(\n`)
            }    
        }
    }
}


