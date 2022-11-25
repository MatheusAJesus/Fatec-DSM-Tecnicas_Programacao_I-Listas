import { URI } from "../../enuns/uri";
import Buscador from "./buscador";

//mock
import { mockClientes } from "../../services/listas/mockClientes";

export default class BuscadorClientes implements Buscador {
    public async buscar() {
        let json = await fetch(URI.BUSCAR+'/clientes').then(resposta => resposta.json())
        return json
    }

    public buscarMock(){
        return mockClientes
    }
}