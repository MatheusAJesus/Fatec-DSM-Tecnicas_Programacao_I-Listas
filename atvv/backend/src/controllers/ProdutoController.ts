import { Request, Response } from "express";
import {ProdutoRepository} from "../repositories/produtoRepository"

interface IProdutoController {
    create: (req: Request, res: Response) => Promise<any>;
    findAll: (req: Request, res: Response) => Promise<any>;
    findOne: (req: Request, res: Response) => Promise<Response>;
    update: (req: Request, res: Response) => Promise<Response>;
    delete: (req: Request, res: Response) => Promise<Response>;
  }


export class ProdutoController implements IProdutoController{
    private produtoRepository: ProdutoRepository
    constructor(produtoRepository: ProdutoRepository){
        this.produtoRepository = produtoRepository;
    }

    async create(req: Request, res: Response) {
        try {
          const produtoRepository = new ProdutoRepository();
          const produto = await produtoRepository.create(req.body);
          return res.status(201).json(produto);
        }
        catch (error) {
          console.log(error);
        }
      };

    async findAll(req: Request, res: Response){
        try {
            const produtoRepository = new ProdutoRepository();
            const produto = await produtoRepository.findAll();
            return produto.length > 0
            ? res.status(200).json(produto)
            : res.status(200).send(JSON.parse("Nenhum cliente encontrado"));
        } catch (err) {
            console.log(err);
        }
    };

    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const produtoRepository = new ProdutoRepository();
        const produto = await produtoRepository.findOne(id);
        return produto
          ? res.status(200).json(produto)
          : res.status(404).send("Associado Não encontrado")
    
      };
    
      async update(req: Request, res: Response) {
        const { id } = req.params;
        const produtoRepository = new ProdutoRepository();
        await produtoRepository.update(id, req.body);
        return res.status(200).send("Associado atualizado com sucesso");
      };

      async delete(req: Request, res: Response) {
        const { id } = req.params;
        const produtoRepository = new ProdutoRepository();
        await produtoRepository.delete(id);
        return res.status(204).send("Associado deletado com sucesso");
      };
}

export default new ProdutoController(new ProdutoRepository);