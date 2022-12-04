import { ItemPedidoModel } from "../database/models/tables";

export interface ItemPedidoAtributes {
    pro_codigo?: number;
    serv_codigo?: number;
    item_quantidade?: number; 
    ped_numero?: number; 
  }


export class ItemPedidoRepository{
    async findAll(){
        const itemPedido = await ItemPedidoModel.findAll({})
        return itemPedido;
    }

    
  async findOne(id: number | string) {
    const itemPedido = await ItemPedidoModel.findOne({ where: { id } })
    return itemPedido;
  }


  async create(data: ItemPedidoAtributes) {
    const { pro_codigo, serv_codigo, item_quantidade, ped_numero } = data;
    const itemPedido = await ItemPedidoModel.create({
        pro_codigo,
        serv_codigo,
        item_quantidade,
        ped_numero
    });
    return itemPedido
  }

  async update(id: number | string, data: ItemPedidoAtributes) {
    const itemPedido = await ItemPedidoModel.update({
      data
    }, { where: { id } });

    return itemPedido;
  };

  async delete(id: number | string) {
    await ItemPedidoModel.destroy({ where: { id } });
  }
}