import mongoose, { Schema, Document } from 'mongoose';
import { IOrder } from './order.ts';

interface ICustomer extends Document
{
    _id : string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    orders : mongoose.Types.ObjectId[];
}

export {ICustomer};

const CustomerSchema: Schema = new Schema
({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true, unique: true },
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: "Order"}]
});

const CustomerModel = mongoose.model<ICustomer>("Customer", CustomerSchema);

export default CustomerModel;