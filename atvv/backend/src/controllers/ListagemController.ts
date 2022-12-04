import db from "../database/config";
const { QueryTypes } = require('sequelize');
import { Request, Response } from "express";




export const listaRelacao =    async (req: Request, res: Response) => {
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

export const clientesGenero =    async (req: Request, res: Response) => {
    try {
        const { QueryTypes } = require('sequelize');
        const { genero } = req.params;

        const consulta =await db.query(
            "SELECT * FROM `cliente` WHERE cli_genero = :genero", { 
                replacements: {genero: genero},
                type: QueryTypes.SELECT });
        // We didn't need to destructure the result here - the results were returned directly
        
        console.log(consulta)
        return await consulta.length > 0
        ? res.status(200).json(consulta)
        : res.status(200).send(JSON.parse("nenhum cliente encontrado"));
    } catch (err) {
        console.log(err);
    }
};

export const maisConsumidosQtd =    async (req: Request, res: Response) => {
    try {
        const { QueryTypes } = require('sequelize');


        const consulta =await db.query(
            "SELECT `ped`.`ped_numero`, `prod`.`prod_codigo`, `prod`.`prod_descricao`, SUM(`item`.`item_quantidade`) FROM `item_pedido` `item` INNER JOIN `pedido` `ped` ON `item`.`ped_numero` = `ped`.`ped_numero` INNER JOIN `produto` `prod` ON `item`.`pro_codigo` = `prod`.`prod_codigo` GROUP BY `prod`.`prod_descricao` ORDER BY SUM(`item`.`item_quantidade`) DESC", { 
                type: QueryTypes.SELECT });
        
        console.log(consulta)
        return await consulta.length > 0
        ? res.status(200).json(consulta[0])
        : res.status(200).send(JSON.parse("nenhum cliente encontrado"));
    } catch (err) {
        console.log(err);
    }
};

export const maisConsumidosGenero =    async (req: Request, res: Response) => {
    try {
        const { QueryTypes } = require('sequelize');
        const { genero } = req.params;

        const consulta =await db.query(
            "select `ped`.`ped_numero`, `prod`.`prod_codigo`, `prod`.`prod_descricao`, sum(`item`.`item_quantidade`), `cli`.`cli_nome`, `cli`.`cli_genero` from `item_pedido` `item` inner join `pedido` `ped` on `item`.`ped_numero` = `ped`.`ped_numero` inner join `produto` `prod` on `item`.`pro_codigo` = `prod`.`prod_codigo` inner join `cliente` `cli` on `ped`.`cli_codigo` = `cli`.`cli_codigo` where `cli`.`cli_genero` = :genero group by `prod`.`prod_descricao`, `cli`.`cli_nome` order by sum(`item`.`item_quantidade`) DESC; ", { 
                replacements: {genero: genero},
                type: QueryTypes.SELECT });

        
        console.log(consulta)
        return await consulta.length > 0
        ? res.status(200).json(consulta[0])
        : res.status(200).send(JSON.parse("nenhum cliente encontrado"));
    } catch (err) {
        console.log(err);
    }
};


export const maisConsumidoClientesQtd =    async (req: Request, res: Response) => {
    try {
        const { QueryTypes } = require('sequelize');


        const consulta =await db.query(
            "select sum(`item`.`item_quantidade`), `cli`.`cli_nome`, `cli`.`cli_genero` from `item_pedido` `item` inner join `pedido` `ped` on `item`.`ped_numero` = `ped`.`ped_numero` inner join `produto` `prod` on `item`.`pro_codigo` = `prod`.`prod_codigo` inner join `cliente` `cli` on `ped`.`cli_codigo` = `cli`.`cli_codigo` group by `cli`.`cli_nome` order by sum(`item`.`item_quantidade`) DESC; ", { 
                type: QueryTypes.SELECT });
        
        console.log(consulta)
        return await consulta.length > 0
        ? res.status(200).json(consulta[0])
        : res.status(200).send(JSON.parse("nenhum cliente encontrado"));
    } catch (err) {
        console.log(err);
    }
};

export const menosConsumidoClientesQtd =    async (req: Request, res: Response) => {
    try {
        const { QueryTypes } = require('sequelize');


        const consulta =await db.query(
            "select sum(`item`.`item_quantidade`), `cli`.`cli_nome`, `cli`.`cli_genero` from `item_pedido` `item` inner join `pedido` `ped` on `item`.`ped_numero` = `ped`.`ped_numero` inner join `produto` `prod` on `item`.`pro_codigo` = `prod`.`prod_codigo` inner join `cliente` `cli` on `ped`.`cli_codigo` = `cli`.`cli_codigo` group by `cli`.`cli_nome` order by sum(`item`.`item_quantidade`)", { 
                type: QueryTypes.SELECT });
        
        console.log(consulta)
        return await consulta.length > 0
        ? res.status(200).json(consulta[0])
        : res.status(200).send(JSON.parse("nenhum cliente encontrado"));
    } catch (err) {
        console.log(err);
    }
};

export const maisConsumidoClientesValor =    async (req: Request, res: Response) => {
    try {
        const { QueryTypes } = require('sequelize');


        const consulta =await db.query(
            "select sum(`ped`.`ped_valor_total`), `cli`.`cli_nome`, `cli`.`cli_genero` from `pedido` `ped` inner join `cliente` `cli` on `ped`.`cli_codigo` = `cli`.`cli_codigo` group by `cli`.`cli_codigo` ", { 
                type: QueryTypes.SELECT });
        
        console.log(consulta)
        return await consulta.length > 0
        ? res.status(200).json(consulta[0])
        : res.status(200).send(JSON.parse("nenhum cliente encontrado"));
    } catch (err) {
        console.log(err);
    }
};