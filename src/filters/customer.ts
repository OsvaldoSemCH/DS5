
import { Request, Response, NextFunction } from "express";
import { ICustomer } from "../models/customer.ts";

export function VerifyCustomerRegister(req : Request, res : Response, next : NextFunction)
{
    const Data : ICustomer = req.body;
    if(!Data.password || !Data.name || !Data.email || !Data.phone || !Data.address)
    {
        res.status(400).send({message: "Dados incompletos"})
        return;
    }
    next();
}

export function VerifyCustomerLogin(req : Request, res : Response, next : NextFunction)
{
    const {email,password} = req.body;
    if(!password || !email)
    {
        res.status(400).send({message: "Dados incompletos"})
        return;
    }
    next();
}