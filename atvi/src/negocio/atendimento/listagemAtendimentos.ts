import Atendimento from "../../modelo/atendimento";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../crud_comum/listagem";

export default class ListagemAtendimento extends Listagem{
    private atendimentos: Array<Atendimento>
    private generosCadastrados: Array<string>

	constructor(atendimentos: Array<Atendimento>, generosCadastrados: Array<string>){
		super()
        this.atendimentos = atendimentos
        this.generosCadastrados = generosCadastrados
	}

    public listar(atendimentos = this.atendimentos): void{
        atendimentos.forEach(atendimento =>{
            console.log(`Atendimento Nº: ${atendimento.id}`)
            console.log(`Data: ${atendimento.dataAtendimento.toLocaleDateString()}`)
            console.log(`Cliente: ` + atendimento.cliente);
            console.log(`CPF Cliente: ` + atendimento.cpfCliente);
            console.log(`Produtos(${atendimento.qtdProdutos} un):`)    
            atendimento.produtos.forEach(produto => {
                console.log(`   ${produto.nome}:  R$ ${produto.valor.toFixed(2)}`)
            });
            console.log(`Serviços(${atendimento.qtdServicos} un):`)    
            atendimento.servicos.forEach(servico => {
                console.log(`   ${servico.nome}: R$ ${servico.valor.toFixed(2)}`)
            });
            console.log(`Valor Total: R$ ${atendimento.valorTotal.toFixed(2)}`);
            console.log(`--------------------------------------`);
        })
    }


    public consumidos(estoque: Array<Produto|Servico>, listaNoAtendimento: string ){
        let listaOrdenadaConsumidos = []

        estoque.forEach((itemEstoque: Produto|Servico) => {
            let quantidadeConsumida = 0
            this.atendimentos.forEach((atendimento: Atendimento) => {
                atendimento[listaNoAtendimento].forEach((itemNaListaAtendimento: Produto|Servico) => {
                    itemNaListaAtendimento.id == itemEstoque.id? quantidadeConsumida += 1 : quantidadeConsumida = quantidadeConsumida
                })
            })
            listaOrdenadaConsumidos.push({nome: itemEstoque.nome, quantidade: quantidadeConsumida})
        })
        
        listaOrdenadaConsumidos.sort((menor,maior)=>{return maior.quantidade - menor.quantidade})
        listaOrdenadaConsumidos.forEach(item => {
            console.log(`${item.nome}: ${item.quantidade}`)
        })
    }

    public consumidosGenero(listaNoAtendimento: string){
        let generosEItens = []
        let generosAtendidos = []
        let itensAtendidos = []


        this.atendimentos.forEach((atendimento: Atendimento) => {
            atendimento[listaNoAtendimento].forEach((itemNaListaAtendimento: Produto|Servico) => {
                generosEItens.push({genero: atendimento.generoCliente, item: itemNaListaAtendimento.nome})
                generosAtendidos.includes(atendimento.generoCliente)? 'já listado' : generosAtendidos.push(atendimento.generoCliente)
                itensAtendidos.includes(itemNaListaAtendimento.nome)? 'já listado' : itensAtendidos.push(itemNaListaAtendimento.nome)
            })
        })

        let generosAgrupados = []
        generosAtendidos.forEach(generoAtendido => {
            generosAgrupados.push({genero:generoAtendido, itensConsumidos: [], itensEQtd: []})
        })

        generosAgrupados.forEach(generoAgrupado  => {
            generosEItens.forEach(generoEItem =>{
                generoEItem.genero == generoAgrupado.genero? generoAgrupado.itensConsumidos.push(generoEItem.item) : 'passa'
            })
        })

        itensAtendidos.forEach(itemAtendido => {
            generosAgrupados.forEach( generoAgrupado => {
                let quantidadeConsumida = 0
                generoAgrupado.itensConsumidos.forEach(itemConsumido => {
                    itemConsumido == itemAtendido ? quantidadeConsumida += 1 : quantidadeConsumida = quantidadeConsumida
                })
                generoAgrupado.itensEQtd.push({item: itemAtendido, quantidade: quantidadeConsumida})
                generoAgrupado.itensEQtd.sort((menor,maior)=>{return maior.quantidade - menor.quantidade})
    
            })
        })

        generosAgrupados.forEach(generoAgrupado=>{
            console.log(`\nGênero ${generoAgrupado.genero}:`)
            generoAgrupado.itensEQtd.forEach(itemEQtd => {
                if(itemEQtd.quantidade != 0){
                    console.log(`   ${itemEQtd.item}: ${itemEQtd.quantidade}`)
                }
           })
        })

    }



}

