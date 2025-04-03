import ProductModel, { IProduct } from "../models/product.ts";

export default class ProductService
{
    static async CreateProduct(Data : IProduct)
    {
        const Product = new ProductModel(Data);
        try
        {
            await Product.save();
            return Product;
        }catch(error)
        {
            return null;
        }
    }

    static async GetProducts()
    {
        try
        {
            const result = await ProductModel.find();
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

    static async DeleteProduct(id : string)
    {
        try
        {
            const result = await ProductModel.deleteOne({_id: id});
            return result;
        }catch(error)
        {
            return null;
        }
    }
}