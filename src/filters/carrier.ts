import { Request, Response, NextFunction } from "express";
import { ICarrier } from "../models/carrier.ts";

export function VerifyCarrierRegister(req : Request, res : Response, next : NextFunction)
{
    const Data : ICarrier = req.body;
    if(!Data.name || !Data.transportation_type || !Data.cnpj)
    {
        res.status(400).send({message: "Dados incompletos"})
        return;
    }
    next();
}