import mongoose, { Schema, Document } from 'mongoose';
import { ICustomer } from './customer.ts';
import { ICarrier } from './carrier.ts';
import { IProduct } from './product.ts';

interface IOrder extends Document
{
    _id : string;
    customer : ICustomer;
    products : IProduct;
    carrier : ICarrier | null;
    status : string;
}

export {IOrder};

const OrderSchema: Schema = new Schema
({
    customer: {type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
    carrier: {type: mongoose.Schema.Types.ObjectId, ref: "Carrier"},
    status: {type: String, required: true},
});

const OrderModel = mongoose.model<IOrder>("Order", OrderSchema);

export default OrderModel;