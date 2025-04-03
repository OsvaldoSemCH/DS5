import CustomerModel, { ICustomer } from "../models/customer.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();


export default class CustomerService
{
    static async Register(Data : ICustomer)
    {
        Data.password = await bcrypt.hash(Data.password, await bcrypt.genSalt(12))

        const Customer = new CustomerModel(Data);
        try
        {
            await Customer.save();
            return Customer;
        }catch(error)
        {
            return null;
        }
    }

    static async GetOrders(id : string)
    {
        try
        {
            const result = await CustomerModel.findOne({_id: id}).populate("orders");
            if(result)
            {
                return result.orders;
            }
            return null;
        }catch
        {
            return null;
        }
    }

    static async DeleteCustomer(id : string)
    {
        try
        {
            const result = await CustomerModel.deleteOne({_id: id});
            return result;
        }catch(error)
        {
            return null;
        }
    }
}