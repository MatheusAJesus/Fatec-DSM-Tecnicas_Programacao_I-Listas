import { RgModel } from "../database/models/tables";

export interface RgAtributes {
    rg_numero?: string;
    cli_codigo?: number;
    rg_data_emissao?: Date;
      
  }


export class RgRepository{
    async findAll(){
        const rg = await RgModel.findAll({})
        return rg;
    }

    
  async findOne(id: number | string) {
    const rg = await RgModel.findOne({ where: { id } })
    return rg;
  }


  async create(data: RgAtributes) {
    const { rg_numero, cli_codigo, rg_data_emissao } = data;
    const rg = await RgModel.create({
        rg_numero,
        cli_codigo,
        rg_data_emissao
    });
    return rg
  }

  async update(id: number | string, data: RgAtributes) {
    const rg = await RgModel.update({
      data
    }, { where: { id } });

    return rg;
  };

  async delete(id: number | string) {
    await RgModel.destroy({ where: { id } });
  }
}