import CustomerModel, { ICustomer } from "../models/customer.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { IOrder } from "../models/order.ts";

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
            const result = await CustomerModel.findById(id).populate<{orders: IOrder[]}>("orders");
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
            const result = await CustomerModel.findByIdAndDelete(id);
            return result;
        }catch(error)
        {
            return null;
        }
    }

    static async Login({email,password} : {email: string, password: string})
    {
        const Customer = await CustomerModel.findOne({email});

        if(!Customer)
        {
            return null
        }

        if(!await bcrypt.compare(password,Customer.password))
        {
            return null
        }

        const Secret = process.env.SECRET;
        if(Secret == undefined){return;}

        const Token = jwt.sign({id:Customer._id,},Secret,{expiresIn:"2 years"});

        return Token
    }
}