import { Request, Response } from "express";
import CarrierModel, { ICarrier } from "../models/carrier.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import CarrierService from "../services/carrier.ts";

dotenv.config();

export default class CarrierController
{
    static async Register(req: Request, res: Response)
    {
        const Data : ICarrier = req.body;

        const result = await CarrierService.Register(Data);

        if(result == null)
        {
            res.status(400).send({message:"Carrier creation failed"});
        }else
        {
            res.status(200).send(result);
        }
    }

    static async GetDeliveries(req: Request, res: Response)
    {
        const id = req.params.id;

        const result = await CarrierService.GetDeliveries(id)
        if(result != null)
        {
            res.status(200).send(result)
        }else
        {
            res.status(400).send({message: "Could not find carrier"})
        }
    }
}