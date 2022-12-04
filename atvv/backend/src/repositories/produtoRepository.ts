import { ProdutoModel } from "../database/models/tables";


export interface ProdutoAtributes {
  prod_codigo?: number,
  prod_descricao: string,
  prod_valor: number;  
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
    const {prod_codigo, prod_descricao, prod_valor } = data;
    const produto = await ProdutoModel.create({
      prod_codigo,
      prod_descricao,
        prod_valor
    });
    return produto
  }

  async update(id: number | string, data: ProdutoAtributes) {
    const produto = await ProdutoModel.update({
      data
    }, { where: { id } });

    return produto;
  };

  async delete(prod_codigo: number) {
    await ProdutoModel.destroy({ where: { prod_codigo } });
  }
}