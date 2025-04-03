import OrderModel, { IOrder } from "../models/order.ts";

export default class OrderService
{
    static async CreateOrder(Data : IOrder)
    {
        const Order = new OrderModel({
            customer: Data.customer.id,
            products: Data.products
        });
        try
        {
            await Order.save();
            return Order;
        }catch(error)
        {
            return null;
        }
    }

    static async GetOrders(status : string | undefined)
    {
        try
        {
            let result;
            if(status != undefined)
            {
                result = await OrderModel.find({status: status});
            }else
            {
                result = await OrderModel.find();
            }
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

    static async CancelOrder(id : string)
    {
        try
        {
            const result = await OrderModel.findByIdAndUpdate(id, {status: "cancelado"});
            return result;
        }catch(error)
        {
            return null;
        }
    }
}