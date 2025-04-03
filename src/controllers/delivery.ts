import { Request, Response } from "express";
import DeliveryModel, { IDelivery } from "../models/delivery.ts";
import DeliveryService from "../services/delivery.ts";


export default class DeliveryController
{
    static async CreateDelivery(req: Request, res: Response)
    {
        const Data : IDelivery = req.body;

        const result = await DeliveryService.CreateDelivery(Data);

        if(result == null)
        {
            res.status(400).send({message:"Delivery creation failed"});
        }else
        {
            res.status(200).send(result);
        }
    }

    static async GetDelivery(req: Request, res: Response)
    {
        const id = req.params.id
        const result = await DeliveryService.GetDelivery(id)
        if(result != null)
        {
            res.status(200).send(result)
        }else
        {
            res.status(400).send({message: "Could not find Delivery"})
        }
    }

    static async UpdateDelivery(req: Request, res: Response)
    {
        const id = req.params.id;
        const {status} = req.body;

        const result = await DeliveryService.UpdateDelivery(id, status)
        if(result)
        {
            res.status(200).send(result)
        }else
        {
            res.status(400).send({message: "Could not change Delivery status"})
        }
    }

    static async Track(req: Request, res: Response)
    {
        const id = req.params.id;

        const result = await DeliveryService.Track(id);
        if(result)
        {
            let speed;
            if(result.carrier.transportation_type == "aquatico")
            {
                speed = 5
            }else
            if(result.carrier.transportation_type == "terrestre")
            {
                speed = 3
            }else
            {
                speed = 2
            }
            let date = new Date()
            date.setDate(date.getDate() + speed);
            res.status(200).send(
                {
                    order: result.order._id,
                    status: result.status,
                    carrier: result.carrier.name,
                    predicted_delivery: `${date.getFullYear}-${date.getMonth}-${date.getDate()}`
                }
            )
        }else
        {
            res.status(400).send({message: "Could not change Delivery status"})
        }
    }
}