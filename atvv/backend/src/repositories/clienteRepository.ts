import { ClienteModel } from "../database/models/tables";
import { TelefoneAtributes } from "./telefoneRepository";
import { RgAtributes } from "./rgRepository";


export interface ClienteoAtributes {
    nome?: string;
    cpf?: string;
    rg?: RgAtributes[];
    nome_social?: string;
    telefone?: TelefoneAtributes[];
    genero?: string;
  
  }


export class ClienteRepository{
    async findAll(){
        const cliente = await ClienteModel.findAll({})
        return cliente;
    }

    
  async findOne(id: number | string) {
    const cliente = await ClienteModel.findOne({ where: { id } })
    return cliente;
  }


  async create(data: ClienteoAtributes) {
    const { nome, nome_social, cpf, rg, telefone } = data;
    const cliente = await ClienteModel.create({
      nome,
      nome_social,
      cpf,
      rg,
      telefone,
    });
    return cliente
  }

  async update(id: number | string, data: ClienteoAtributes) {
    const cliente = await ClienteModel.update({
      data
    }, { where: { id } });

    return cliente;
  };

  async delete(id: number | string) {
    await ClienteModel.destroy({ where: { id } });
  }
}