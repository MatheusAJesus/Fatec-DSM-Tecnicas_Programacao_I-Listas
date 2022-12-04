import { Request, Response } from "express";
import {RgRepository} from "../repositories/rgRepository"

interface IRgController {
    create: (req: Request, res: Response) => Promise<any>;
    findAll: (req: Request, res: Response) => Promise<any>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
  }


export class RgController implements IRgController{
    private rgRepository: RgRepository
    constructor(rgRepository: RgRepository){
        this.rgRepository = rgRepository;
    }

    async create(req: Request, res: Response) {
        try {
          const rgRepository = new RgRepository();
          const rg = await rgRepository.create(req.body);
          return res.status(201).json(rg);
        }
        catch (error) {
          console.log(error);
        }
      };

    async findAll(req: Request, res: Response){
        try {
            const rgRepository = new RgRepository();
            const rg = await rgRepository.findAll();
            return rg.length > 0
            ? res.status(200).json(rg)
            : res.status(200).send(JSON.parse("Nenhum cliente encontrado"));
        } catch (err) {
            console.log(err);
        }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const rgRepository = new RgRepository();
        const rg = await rgRepository.findOne(id);
        return rg
          ? res.status(200).json(rg)
          : res.status(404).send("Associado Não encontrado")
    
      };
    
      async update(req: Request, res: Response) {
        const { id } = req.params;
        const rgRepository = new RgRepository();
        await rgRepository.update(id, req.body);
        return res.status(200).send("Associado atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const rgRepository = new RgRepository();
        await rgRepository.delete(id);
        return res.status(204).send("Associado deletado com sucesso");
      };
}

export default new RgController(new RgRepository);