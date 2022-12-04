import { TelefoneModel } from "../database/models/tables";

export interface TelefoneAtributes {
    tel_numero?: string;
  }


export class TelefoneRepository{
    async findAll(){
        const telefone = await TelefoneModel.findAll({})
        return telefone;
    }

    
  async findOne(id: number | string) {
    const telefone = await TelefoneModel.findOne({ where: { id } })
    return telefone;
  }


  async create(data: TelefoneAtributes) {
    const { tel_numero } = data;
    const telefone = await TelefoneModel.create({
        tel_numero
    });
    return telefone
  }

  async update(id: number | string, data: TelefoneAtributes) {
    const telefone = await TelefoneModel.update({
      data
    }, { where: { id } });

    return telefone;
  };

  async delete(id: number | string) {
    await TelefoneModel.destroy({ where: { id } });
  }
}