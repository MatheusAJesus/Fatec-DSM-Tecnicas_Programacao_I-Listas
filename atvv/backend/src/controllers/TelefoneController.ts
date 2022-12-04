import { Request, Response } from "express";
import {TelefoneRepository} from "../repositories/telefoneRepository"
import db from "../database/config";

interface ITelefoneController {
    create: (req: Request, res: Response) => Promise<any>;
    findAll: (req: Request, res: Response) => Promise<any>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
  }


export class TelefoneController implements ITelefoneController{
    private telefoneRepository: TelefoneRepository
    constructor(telefoneRepository: TelefoneRepository){
        this.telefoneRepository = telefoneRepository;
    }

    async create(req: Request, res: Response) {
        try {
          const telefoneRepository = new TelefoneRepository();
          const telefone = await telefoneRepository.create(req.body);
          return res.status(201).json(telefone);
        }
        catch (error) {
          console.log(error);
        }
      };

    async findAll(req: Request, res: Response){
        try {
            const telefoneRepository = new TelefoneRepository();
            const telefone = await telefoneRepository.findAll();
            return telefone.length > 0
            ? res.status(200).json(telefone)
            : res.status(200).send(JSON.parse("Nenhum telefone encontrado"));
        } catch (err) {
            console.log(err);
        }
    };

    async consulta(req: Request, res: Response){
      try {
        const { QueryTypes } = require('sequelize');

        const consulta =await db.query("SELECT `cliente`.`cli_nome`, `cliente`.`cli_cpf`, `t`.`tel_numero` FROM `cliente` INNER JOIN `telefone` AS `t` ON `cliente`.`cli_codigo` = `t`.`clienteCliCodigo`", { type: QueryTypes.SELECT });
        // We didn't need to destructure the result here - the results were returned directly
        
        console.log(consulta)
        return (await consulta).length > 0
          ? res.status(200).json(consulta)
          : res.status(200).send(JSON.parse("Nenhum telefone encontrado"));
      } catch (err) {
          console.log(err);
      }
  };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const telefoneRepository = new TelefoneRepository();
        const telefone = await telefoneRepository.findOne(id);
        return telefone
          ? res.status(200).json(telefone)
          : res.status(404).send("Telefone Não encontrado")
    
      };
    
      async update(req: Request, res: Response) {
        const { id } = req.params;
        const telefoneRepository = new TelefoneRepository();
        await telefoneRepository.update(id, req.body);
        return res.status(200).send("Telefone atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const telefoneRepository = new TelefoneRepository();
        await telefoneRepository.delete(id);
        return res.status(204).send("Telefone deletado com sucesso");
      };
}

export default new TelefoneController(new TelefoneRepository);