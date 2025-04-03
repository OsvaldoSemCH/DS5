import CarrierModel, { ICarrier } from "../models/carrier.ts";

export default class CarrierService
{
    static async Register(Data : ICarrier)
    {
        const Carrier = new CarrierModel(Data);
        try
        {
            await Carrier.save();
            return Carrier;
        }catch(error)
        {
            return null;
        }
    }

    static async GetDeliveries(id : string)
    {
        try
        {
            const result = await CarrierModel.findOne({_id: id}).populate("deliveries");
            if(result)
            {
                return result.deliveries;
            }
            return null;
        }catch
        {
            return null;
        }
    }
}