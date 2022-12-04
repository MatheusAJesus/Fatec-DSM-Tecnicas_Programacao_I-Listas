import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { ListaAtendimentos } from "./atendimentos.defaultStyles"
import { mockAtendimentos } from "../../mocks/mockAtendimentos.ts"
import {api} from '../../services/api'

function Atendimentos() {
    const navigate = useNavigate();

    
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        async function loadPedidos() {
            const response = await api.get("/pedidos");
            setPedidos(response.data);
        }
        loadPedidos();
    }, []);

    // let pedidoSeparado = [];

    // pedidos.forEach(pedido=> {

    //     pedidoSeparado.includes(pedido.ped_numero)?'já listado':pedidoSeparado.push(pedido.ped_numero)
    // })
    // let pedidoAgrupado = []
    // pedidoSeparado.forEach(pedidoSelecionado => {
    //     pedidoAgrupado.push({idPedido: pedidoSelecionado, itensConsumidos: []})
    // })
    let listPedidos = pedidos.map((pedido) =>{
        return (
            <div key={pedido.ped_numero}>
                <details >
                    <summary>
                        <p><b>Data: </b>{'data'}</p>
                    </summary>
                    <div>
                    <p><b>Cliente: </b>{pedido.cli_nome}</p>
                    <div><b>Produtos: </b>{pedido.prod_descricao}
                         <p >{pedido.prod_descricao}: R${pedido.prod_valor}</p>
                    </div>
                    {/* <div><b>Serviços: </b>{atendimento.servicos.map( servico => {
                        return <p key={servico.id}>{servico.nome}: R${servico.valor.toFixed(2)}</p>
                    })}</div> */}
                    <br/>
                    <p><b>Valor total: </b>R${pedido.ped_valor_total}</p>
                    </div>
                </details>
            </div>
        )
    })        

    return (
        <>
            <ListaAtendimentos>
            <h1>Atendimentos</h1>
                <button className="editar" onClick={()=>{navigate('/novoAtendimento')}}>Novo Atendimento</button>
                {listPedidos}  
            </ListaAtendimentos>
        </>
    )

}

export default Atendimentos;