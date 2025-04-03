import { Request, Response } from "express";
import CustomerModel, { ICustomer } from "../models/customer.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import CustomerService from "../services/customer.ts";

dotenv.config();

export default class CustomerController
{
    static async Register(req: Request, res: Response)
    {
        const Data : ICustomer = req.body;

        const result = await CustomerService.Register(Data);

        if(result == null)
        {
            res.status(400).send({message:"Customer creation failed"});
        }else
        {
            res.status(200).send(result);
        }
    }

    static async GetOrders(req: Request, res: Response)
    {
        const id = req.params.id;

        const result = await CustomerService.GetOrders(id)
        if(result != null)
        {
            res.status(200).send(result)
        }else
        {
            res.status(404).send({message: "Could not find customer"})
        }
    }

    static async DeleteCustomer(req: Request, res: Response)
    {
        const id = req.params.id;

        const result = await CustomerService.DeleteCustomer(id)
        if(result)
        {
            res.status(200).send(result)
        }else
        {
            res.status(400).send({message: "Could not delete customer"})
        }
    }

    static async Login(req: Request, res: Response)
    {
        const {email,password} = req.body;
        const result = await CustomerService.Login({email, password});

        if(!result)
        {
            res.status(400).send({message:"Invalid Email or password"});
            return
        }

        res.status(200).send({token:result})
    }
}