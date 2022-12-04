import express from "express";
import ClienteController from "./controllers/ClienteCotroller";
import { clientesGenero, listaRelacao, maisConsumidosQtd, maisConsumidosGenero, maisConsumidoClientesQtd, menosConsumidoClientesQtd, maisConsumidoClientesValor } from "./controllers/ListagemController";
import ProdutoController from "./controllers/ProdutoController";
import ServicoController from "./controllers/ServicoController";
import TelefoneController from "./controllers/TelefoneController";
import PedidoController from "./controllers/PedidoController";


export const router = express.Router();

//Cliente

router.post("/clientes", ClienteController.create);
router.get("/clientes", ClienteController.findAll);
router.get("/clientes/:id", ClienteController.findOne);
router.patch("/clientes/:id", ClienteController.update);
router.delete("/clientes/:id", ClienteController.delete);

//Produto

router.post("/produtos", ProdutoController.create);
router.get("/produtos", ProdutoController.findAll);
router.get("/produtos/:id", ProdutoController.findOne);
router.patch("/produtos/:id", ProdutoController.update);
router.delete("/produtos/:id", ProdutoController.delete);

//Servico

router.post("/servicos", ServicoController.create);
router.get("/servicos", ServicoController.findAll);
router.get("/servicos/:id", ServicoController.findOne);
router.patch("/servicos/:id", ServicoController.update);
router.delete("/servicos/:id", ServicoController.delete);

//telefone

router.get("/telefone", TelefoneController.consulta);

//pedido

router.get("/pedidos", PedidoController.selectPedido)



//listagem

router.get("/listagem", listaRelacao)
router.get("/listagem/:genero", clientesGenero)
router.get("/maisconsumidos", maisConsumidosQtd)
router.get("/maisConsumidosGenero/:genero", maisConsumidosGenero)
router.get("/maisConsumidoClientesQtd", maisConsumidoClientesQtd)
router.get("/menosConsumidoClientesQtd", menosConsumidoClientesQtd)
router.get("/maisConsumidoClientesValor", maisConsumidoClientesValor)