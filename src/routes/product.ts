import express, {Router} from 'express';
import ProductController from '../controllers/product.ts';
import { VerifyCreateProduct } from '../filters/product.ts';

const ProductRoutes : Router = express.Router();

ProductRoutes.post('/', VerifyCreateProduct, ProductController.CreateProduct);
ProductRoutes.get("/", ProductController.GetProducts);
ProductRoutes.delete("/:id", ProductController.DeleteProduct);

export default ProductRoutes