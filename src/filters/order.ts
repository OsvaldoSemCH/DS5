import { Request, Response, NextFunction } from "express";
import OrderModel, { IOrder } from "../models/order.ts";

export async function VerifyCancelOrder(req : Request, res : Response, next : NextFunction)
{
    const id = req.params.id;
    const Order = await OrderModel.findById(id)
    if(!Order)
    {
        res.status(404).send({message: "Order not found"})
        return
    }
    if(Order.status === "enviado" || Order.status === "cancelado")
    {
        res.status(400).send({message: "Order cannot be cancelled"})
        return
    }
    next();
}