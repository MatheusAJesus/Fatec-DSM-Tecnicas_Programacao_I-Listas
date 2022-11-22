import Servico from "../../modelo/servico";
import Listagem from "../crud_comum/listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os servicos:`);
        this.servicos.forEach(servico => {
            console.log(`Id: `+ servico.id)
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: R$ ` + servico.valor.toFixed(2));
            console.log(`--------------------------------------`);
        });
    }
}