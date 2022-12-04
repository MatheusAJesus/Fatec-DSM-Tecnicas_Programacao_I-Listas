import { Request, Response } from "express";
import {ItemPedidoRepository} from "../repositories/itemPedidoRepository"

interface IItemPedidoController {
    create: (req: Request, res: Response) => Promise<any>;
    findAll: (req: Request, res: Response) => Promise<any>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
  }


export class ItemPedidoController implements IItemPedidoController{
    private itemPedidoRepository: ItemPedidoRepository
    constructor(itemPedidoRepository: ItemPedidoRepository){
        this.itemPedidoRepository = itemPedidoRepository;
    }

    async create(req: Request, res: Response) {
        try {
          const itemPedidoRepository = new ItemPedidoRepository();
          const itemPedido = await itemPedidoRepository.create(req.body);
          return res.status(201).json(itemPedido);
        }
        catch (error) {
          console.log(error);
        }
      };

    async findAll(req: Request, res: Response){
        try {
            const itemPedidoRepository = new ItemPedidoRepository();
            const itemPedido = await itemPedidoRepository.findAll();
            return itemPedido.length > 0
            ? res.status(200).json(itemPedido)
            : res.status(200).send(JSON.parse("Nenhum itemPedido encontrado"));
        } catch (err) {
            console.log(err);
        }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const itemPedidoRepository = new ItemPedidoRepository();
        const itemPedido = await itemPedidoRepository.findOne(id);
        return itemPedido
          ? res.status(200).json(itemPedido)
          : res.status(404).send("itemPedido Não encontrado")
    
      };
    
      async update(req: Request, res: Response) {
        const { id } = req.params;
        const itemPedidoRepository = new ItemPedidoRepository();
        await itemPedidoRepository.update(id, req.body);
        return res.status(200).send("itemPedido atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const itemPedidoRepository = new ItemPedidoRepository();
        await itemPedidoRepository.delete(id);
        return res.status(204).send("itemPedido deletado com sucesso");
      };
}

export default new ItemPedidoController(new ItemPedidoRepository);