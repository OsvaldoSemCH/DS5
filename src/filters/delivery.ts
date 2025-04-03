import { Request, Response, NextFunction } from "express";
import { IDelivery } from "../models/delivery.ts";

export function VerifyCreateDelivery(req : Request, res : Response, next : NextFunction)
{
    const Data : IDelivery = req.body;
    if(!Data.status || !Data.carrier || !Data.order)
    {
        res.status(400).send({message: "Dados incompletos"})
        return;
    }
    next();
}