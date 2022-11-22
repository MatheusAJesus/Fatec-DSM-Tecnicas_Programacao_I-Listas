import CadastroCliente from "./cadastroCliente";

export default abstract class Modifica {
    public abstract modificarCliente(cpf : string, comporData: CadastroCliente): void
}