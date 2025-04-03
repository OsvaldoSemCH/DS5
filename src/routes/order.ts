import express, {Router} from 'express';
import OrderController from '../controllers/order.ts';
import { VerifyCancelOrder } from '../filters/order.ts';

const OrderRoutes : Router = express.Router();

OrderRoutes.post('/', OrderController.CreateOrder);
OrderRoutes.get("/", OrderController.GetOrders);
OrderRoutes.put("/:id/cancel", VerifyCancelOrder, OrderController.CancelOrder);

export default OrderRoutes