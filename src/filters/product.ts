import { Request, Response, NextFunction } from "express";
import { IProduct } from "../models/product.ts";

export function VerifyCreateProduct(req : Request, res : Response, next : NextFunction)
{
    const Data : IProduct = req.body;
    if(!Data.name || !Data.stock || !Data.price)
    {
        res.status(400).send({message: "Dados incompletos"})
        return;
    }
    if(Data.stock < 0 || Data.price < 0)
    {
        res.status(400).send({message: "Dados inválidos"});
        return;
    }
    next();
}