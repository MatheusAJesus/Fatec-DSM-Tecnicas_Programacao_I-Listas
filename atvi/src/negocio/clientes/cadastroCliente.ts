import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "./cadastro";
import { mockClientes } from "../../listas/mockClientes";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    private generosCadastrados: Array<string>
    
    constructor(clientes: Array<Cliente>, generosCadastrados: Array<string>) {
        super()
        this.clientes = clientes
        this.generosCadastrados = generosCadastrados
        this.entrada = new Entrada()
    }

    //funções principais
    public cadastrarClientes(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let genero = this.entrada.receberTexto(`Por favor informe o nome gênero do cliente: `).toLowerCase(); 
        let valorCpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataEmissaoCpf = this.comporDataDocumento('CPF')
        let valorRg = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let dataEmissaoRg = this.comporDataDocumento('RG')
        let DDD = this.entrada.receberTexto(`Por favor informe o DDD do telefone: `);
        let telefone = this.entrada.receberTexto(`Por favor informe o número do Telefone: `);
        let cliente = this.comporCliente(nome, nomeSocial, genero, valorCpf, dataEmissaoCpf, valorRg, dataEmissaoRg, DDD, telefone)
        this.generosCadastrados.includes(cliente.genero)? 'genero ja cadastrado' : this.generosCadastrados.push(cliente.genero)
        this.clientes.push(cliente)
    }

    public autoCadastrarClientes(): void{
        mockClientes.forEach(mockCliente => {
            let nome = mockCliente.nome
            let nomeSocial = mockCliente.nomeSocial
            let genero = mockCliente.genero
            let valorCpf = mockCliente.cpf
            let dataEmissaoCpf = this.comporDataDocumento('CPF',mockCliente.dataEmissaoCpf)
            let valorRg = mockCliente.rg
            let dataEmissaoRg = this.comporDataDocumento('RG',mockCliente.dataEmissaoRg)
            let DDD = mockCliente.DDD
            let telefone = mockCliente.telefone
            let cliente = this.comporCliente(nome, nomeSocial, genero, valorCpf, dataEmissaoCpf, valorRg, dataEmissaoRg, DDD, telefone)
            this.generosCadastrados.includes(cliente.genero)? 'genero ja cadastrado' : this.generosCadastrados.push(cliente.genero)
            this.clientes.push(cliente)    
        });
    }

    //funções auxiliares
    public comporDataDocumento(documento: string, mockData: string=''){
            let data:string;
            if(mockData === ''){
                data = this.entrada.receberTexto(`Por favor informe a data de emissão do ${documento}, no padrão dd/mm/yyyy: `);
            }else{
                data = mockData 
            }
            if(data[2] === '/' && data[5] ==='/' && data.length === 10){
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes-1, dia)
            return dataEmissao
        }else{
            console.log(`\n*** Data do ${documento} fora do padrão ***\n`)
            this.comporDataDocumento(documento)
        }
    }

    public comporCliente(nome:string, nomeSocial:string, genero:string, valorCpf:string, dataEmissaoCpf:Date, valorRg: string, dataEmissaoRg: Date, DDD:string, telefone:string){  
        let cpf = new CPF(valorCpf, dataEmissaoCpf );
        let rg = new RG(valorRg, dataEmissaoRg)
        let telefoneCompleto = new Telefone(DDD, telefone)
        let cliente = new Cliente(nome, nomeSocial,genero, cpf);
        cliente.setRg = rg
        cliente.setTelefone = telefoneCompleto
        return cliente
    }
}