import { PedidoModel } from "../database/models/tables";

export interface PedidoAtributes {
    cli_codigo?: number;
    ped_valor_total?: string; 
  }


export class PedidoRepository{
    async findAll(){
        const Pedido = await PedidoModel.findAll({})
        return Pedido;
    }

    
  async findOne(id: number | string) {
    const Pedido = await PedidoModel.findOne({ where: { id } })
    return Pedido;
  }


  async create(data: PedidoAtributes) {
    const { cli_codigo, ped_valor_total } = data;
    const Pedido = await PedidoModel.create({
        cli_codigo,
        ped_valor_total
    });
    return Pedido
  }

  async update(id: number | string, data: PedidoAtributes) {
    const Pedido = await PedidoModel.update({
      data
    }, { where: { id } });

    return Pedido;
  };

  async delete(id: number | string) {
    await PedidoModel.destroy({ where: { id } });
  }
}