import mongoose, { Schema, Document } from 'mongoose';
import { IDelivery } from './delivery.ts';

interface ICarrier extends Document
{
    _id : string;
    name : string
    transportation_type : string;
    cnpj : string;
    deliveries : IDelivery[];
}

export {ICarrier};

const CarrierSchema: Schema = new Schema
({
    name: {type: String, required: true},
    transportation_type: {type: String, required: true},
    cnpj: {type: String, required: true, unique: true},
    deliveries: [{type: Schema.Types.ObjectId, ref: "Delivery"}]
});

const CarrierModel = mongoose.model<ICarrier>("Carrier", CarrierSchema);

export default CarrierModel;