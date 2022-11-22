import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private generosCadastrados: Array<string>
    constructor(clientes: Array<Cliente>, generosCadastrados: Array<string>) {
        super()
        this.clientes = clientes
        this.generosCadastrados = generosCadastrados
    }
    
    public listarClientes(clientes = this.clientes): void {
        clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Gênero: `+ cliente.genero)  
            console.log(`CPF: ` + cliente.getCpf.getValor); 
            console.log('RGs:')    
                cliente.getRgs.forEach(rg => {
                    console.log('   '+rg.getValor)
                });
            console.log('Telefones: ')
                cliente.getTelefones.forEach(telefone => {
                    console.log('   '+telefone.getDdd+'-'+telefone.getNumero)
                });
            console.log('-------------------------')
        });  
            
    }


    public listarClientesGenero() {
        let clientesSeparadosGenero = []
        this.generosCadastrados.forEach(generoCadastrado => {
            clientesSeparadosGenero.push({genero:generoCadastrado, clientes:[]})
        })

        this.clientes.forEach(cliente => {
            clientesSeparadosGenero.forEach(listaClientes => {
                listaClientes.genero == cliente.genero? listaClientes.clientes.push(cliente) : 'passa'
            })
        })
        clientesSeparadosGenero.forEach(listaClientes =>{
            console.log('-----------------------------------------------------')
            console.log(`\nClientes do genero ${listaClientes.genero}:\n`)
            this.listarClientes(listaClientes.clientes)
        })
    }


    public consumiram(listaConsumida: string, ordem:string, tamanho: number){
        let clientes = Object.values(this.clientes)
        let clientesOrdenados = []

        if(listaConsumida == 'getValorTotal'){
            clientesOrdenados = clientes.sort((menor,maior)=>{
                return menor[listaConsumida] - maior[listaConsumida]
            })
        }else{
            clientesOrdenados = clientes.sort((menor,maior)=>{
                return menor[listaConsumida].length - maior[listaConsumida].length
            })
        }

        for(let i=0; i<tamanho; i++){
            let posicao = ordem == '<'? i : (i-(clientesOrdenados.length-1))* -1
            if(listaConsumida == 'getValorTotal'){
                console.log(`${clientesOrdenados[posicao].nome}: R$ ${clientesOrdenados[posicao][listaConsumida]}`)
            }else{
                console.log(`${clientesOrdenados[posicao].nome}: ${clientesOrdenados[posicao][listaConsumida].length}`)
            }
        }
    }
}