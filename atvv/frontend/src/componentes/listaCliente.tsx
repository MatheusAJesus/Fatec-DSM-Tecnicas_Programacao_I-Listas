/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import BuscadorClientes from "../conectores/buscadores/buscadorClientes";


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    listagemClientes = new BuscadorClientes().buscarMock()

    render() {
        let listagem = this.listagemClientes.map(cliente => {
            return(
                <>
                    <tr key={cliente.cpf}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.nomeSocial}</td>
                        <td>{`(${cliente.DDD}) ${cliente.telefone}`}</td>
                        <td>{cliente.genero}</td>
                        <td>{cliente.cpf}</td>
                        <td>{cliente.rg}</td>
                    </tr>
                </>
            )
        })
        let estilo = `collection-item active ${this.props.tema}`
        return (

                <table className="centered highlight" style={{maxWidth:"1000px", margin:'auto', marginTop:'25px'}}>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nome Social</th>
                        <th>Telefone</th>
                        <th>Gênero</th>
                        <th>CPF</th>
                        <th>RG</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listagem}
                    </tbody>
                </table>
        )
    }
}


// export default class ListaCliente extends Component<props> {
//     render() {
//         let estilo = `collection-item active ${this.props.tema}`
//         return (
//             <div className="collection">
//                 <a className="collection-item">Cliente 1</a>
//                 <a className={estilo}>Cliente 2</a>
//                 <a className="collection-item">Cliente 3</a>
//                 <a className="collection-item">Cliente 4</a>
//             </div>
//         )
//     }
// }