import { ServicoModel } from "../database/models/tables";


export interface ServicoAtributes {
    descricao?: string;
    valor?: number;  
  }


export class ServicoRepository{
    async findAll(){
        const servico = await ServicoModel.findAll({})
        return servico;
    }

    
  async findOne(id: number | string) {
    const servico = await ServicoModel.findOne({ where: { id } })
    return servico;
  }


  async create(data: ServicoAtributes) {
    const { descricao, valor } = data;
    const servico = await ServicoModel.create({
        descricao,
        valor
    });
    return servico
  }

  async update(id: number | string, data: ServicoAtributes) {
    const servico = await ServicoModel.update({
      data
    }, { where: { id } });

    return servico;
  };

  async delete(id: number | string) {
    await ServicoModel.destroy({ where: { id } });
  }
}