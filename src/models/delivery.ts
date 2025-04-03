import mongoose, { Schema, Document } from 'mongoose';
import { IOrder } from './order.ts';
import { ICarrier } from './carrier.ts';

interface IDelivery extends Document
{
    _id : string;
    order : IOrder;
    carrier : ICarrier;
    status : string;
}

export {IDelivery};

const DeliverySchema: Schema = new Schema
({
    order : {type: Schema.Types.ObjectId, ref: "Order"},
    carrier : {type: Schema.Types.ObjectId, ref: "Carrier"},
    status : {type: String, required: true}
});

const DeliveryModel = mongoose.model<IDelivery>("Delivery", DeliverySchema);

export default DeliveryModel;