import { Request, Response } from "express";
import ProductModel, { IProduct } from "../models/product.ts";
import ProductService from "../services/product.ts";


export default class ProductController
{
    static async CreateProduct(req: Request, res: Response)
    {
        const Data : IProduct = req.body;

        const result = await ProductService.CreateProduct(Data);

        if(result == null)
        {
            res.status(400).send({message:"Product creation failed"});
        }else
        {
            res.status(200).send(result);
        }
    }

    static async GetProducts(req: Request, res: Response)
    {
        const result = await ProductService.GetProducts()
        if(result != null)
        {
            res.status(200).send(result)
        }else
        {
            res.status(400).send({message: "Could not find Products"})
        }
    }

    static async DeleteProduct(req: Request, res: Response)
    {
        const id = req.params.id;

        const result = await ProductService.DeleteProduct(id)
        if(result)
        {
            res.status(200).send(result)
        }else
        {
            res.status(400).send({message: "Could not delete Product"})
        }
    }
}