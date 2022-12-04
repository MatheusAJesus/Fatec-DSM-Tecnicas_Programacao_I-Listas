import { Request, Response } from "express";
import {PedidoRepository} from "../repositories/pedidoRepository"
import db from "../database/config";

interface IPedidoController {
    create: (req: Request, res: Response) => Promise<any>;
    findAll: (req: Request, res: Response) => Promise<any>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
  }

  export class PedidoController implements IPedidoController{
    private pedidoRepository: PedidoRepository
    constructor(pedidoRepository: PedidoRepository){
        this.pedidoRepository = pedidoRepository;
    }

    async create(req: Request, res: Response) {
        try {
          const pedidoRepository = new PedidoRepository();
          const pedido = await pedidoRepository.create(req.body);
          return res.status(201).json(pedido);
        }
        catch (error) {
          console.log(error);
        }
      };

    async findAll(req: Request, res: Response){
        try {
            const pedidoRepository = new PedidoRepository();
            const pedido = await pedidoRepository.findAll();
            return pedido.length > 0
            ? res.status(200).json(pedido)
            : res.status(200).send(JSON.parse("Nenhum cliente encontrado"));
        } catch (err) {
            console.log(err);
        }
    };

    async selectPedido(req: Request, res: Response){
      try {
        const { QueryTypes } = require('sequelize');
  
  
        const consulta =await db.query(
            "select `ped`.`ped_numero`, `prod`.`prod_descricao`, `prod`.`prod_valor`, `ped`.`ped_valor_total` ,`cli`.`cli_nome` from `item_pedido` `item` inner join `pedido` `ped` on `item`.`ped_numero` = `ped`.`ped_numero` inner join `produto` `prod` on `item`.`pro_codigo` = `prod`.`prod_codigo` inner join `cliente` `cli` on `ped`.`cli_codigo` = `cli`.`cli_codigo` ", { 
                type: QueryTypes.SELECT });
        
        console.log(consulta)
        return await consulta.length > 0
        ? res.status(200).json(consulta)
        : res.status(200).send(JSON.parse("nenhum cliente encontrado"));
    } catch (err) {
        console.log(err);
    }
  };



    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const pedidoRepository = new PedidoRepository();
        const pedido = await pedidoRepository.findOne(id);
        return pedido
          ? res.status(200).json(pedido)
          : res.status(404).send("Associado Não encontrado")
    
      };
    
      async update(req: Request, res: Response) {
        const { id } = req.params;
        const pedidoRepository = new PedidoRepository();
        await pedidoRepository.update(id, req.body);
        return res.status(200).send("Associado atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const pedidoRepository = new PedidoRepository();
        await pedidoRepository.delete(id);
        return res.status(204).send("Associado deletado com sucesso");
      };
}

export default new PedidoController(new PedidoRepository);