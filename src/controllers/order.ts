import { Request, Response } from "express";
import OrderModel, { IOrder } from "../models/order.ts";
import OrderService from "../services/order.ts";


export default class OrderController
{
    static async CreateOrder(req: Request, res: Response)
    {
        const Data : IOrder = req.body;

        const result = await OrderService.CreateOrder(Data);

        if(result == null)
        {
            res.status(400).send({message:"Order creation failed"});
        }else
        {
            res.status(200).send(result);
        }
    }

    static async GetOrders(req: Request, res: Response)
    {
        const status = req.query.status
        const result = await OrderService.GetOrders(status?.toString())
        if(result != null)
        {
            res.status(200).send(result)
        }else
        {
            res.status(400).send({message: "Could not find Orders"})
        }
    }

    static async CancelOrder(req: Request, res: Response)
    {
        const id = req.params.id;

        const result = await OrderService.CancelOrder(id)
        if(result)
        {
            res.status(200).send(result)
        }else
        {
            res.status(400).send({message: "Could not cancel Order"})
        }
    }
}