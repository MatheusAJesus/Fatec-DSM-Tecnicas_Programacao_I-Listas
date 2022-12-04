import { Request, Response } from "express";
import {ServicoRepository} from "../repositories/servicoRepository"
import { ServicoModel } from "../database/models/tables";


export const criaServico = async (req,res) =>{
  try{
      const servico = await ServicoModel.create({
        serv_descricao:req.body.serv_descricao,
        serv_valor:req.body.serv_valor
      })
      console.log(servico)
      res.status(201).json(servico)

  }catch(error){
      res.status(500).json({message:error})
  }
}

interface IServicoController {
    create: (req: Request, res: Response) => Promise<any>;
    findAll: (req: Request, res: Response) => Promise<any>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
  }


export class ServicoController implements IServicoController{
    private servicoRepository: ServicoRepository
    constructor(servicoRepository: ServicoRepository){
        this.servicoRepository = servicoRepository;
    }

    async create(req: Request, res: Response) {
        try {
          const servicoRepository = new ServicoRepository();
          const servico = await servicoRepository.create(req.body);
          return res.status(201).json(servico);
        }
        catch (error) {
          console.log(error);
        }
      };

    async findAll(req: Request, res: Response){
        try {
            const servicoRepository = new ServicoRepository();
            const servico = await servicoRepository.findAll();
            return servico.length > 0
            ? res.status(200).json(servico)
            : res.status(200).send(JSON.parse("Nenhum cliente encontrado"));
        } catch (err) {
            console.log(err);
        }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const servicoRepository = new ServicoRepository();
        const servico = await servicoRepository.findOne(id);
        return servico
          ? res.status(200).json(servico)
          : res.status(404).send("Associado Não encontrado")
    
      };
    
      async update(req: Request, res: Response) {
        const { id } = req.params;
        const servicoRepository = new ServicoRepository();
        await servicoRepository.update(id, req.body);
        return res.status(200).send("Associado atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { serv_codigo } = req.params;
        const servicoRepository = new ServicoRepository();
        await servicoRepository.delete(Number (serv_codigo));
        return res.status(204).send("Associado deletado com sucesso");
      };
}

export default new ServicoController(new ServicoRepository);