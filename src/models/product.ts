import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document
{
    _id : string;
    name : string
    stock : number;
    price : number;
}

export {IProduct};

const ProductSchema: Schema = new Schema
({
    name : {type: String, required: true},
    stock : {type: Number, required: true},
    price : {type: Number, required: true}
});

const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;