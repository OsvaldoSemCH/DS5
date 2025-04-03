import DeliveryModel, { IDelivery } from "../models/delivery.ts";

export default class DeliveryService
{
    static async CreateDelivery(Data : IDelivery)
    {
        const Delivery = new DeliveryModel({
            status: Data.status,
            carrier: Data.carrier,
            order: Data.order
        });
        try
        {
            await Delivery.save();
            return Delivery;
        }catch(error)
        {
            return null;
        }
    }

    static async GetDelivery(id : string)
    {
        try
        {
            const result = DeliveryModel.findById(id)
            if(result)
            {
                return result;
            }
            return null;
        }catch
        {
            return null;
        }
    }

    static async UpdateDelivery(id : string, status: string)
    {
        try
        {
            const result = await DeliveryModel.findByIdAndUpdate(id, {status: status});
            return result;
        }catch(error)
        {
            return null;
        }
    }
}