import { ProdutoModel } from "../database/models/tables";


export interface ProdutoAtributes {
    descricao?: string;
    valor?: number;  
  }


export class ProdutoRepository{
    async findAll(){
        const produto = await ProdutoModel.findAll({})
        return produto;
    }

    
  async findOne(id: number | string) {
    const produto = await ProdutoModel.findOne({ where: { id } })
    return produto;
  }


  async create(data: ProdutoAtributes) {
    const { descricao, valor } = data;
    const produto = await ProdutoModel.create({
        descricao,
        valor
    });
    return produto
  }

  async update(id: number | string, data: ProdutoAtributes) {
    const produto = await ProdutoModel.update({
      data
    }, { where: { id } });

    return produto;
  };

  async delete(id: number | string) {
    await ProdutoModel.destroy({ where: { id } });
  }
}