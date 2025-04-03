import express, {Router} from 'express';
import DeliveryController from '../controllers/delivery.ts';
import { VerifyCreateDelivery } from '../filters/delivery.ts';

const DeliveryRoutes : Router = express.Router();

DeliveryRoutes.post('/', VerifyCreateDelivery, DeliveryController.CreateDelivery);
DeliveryRoutes.get("/:id", DeliveryController.GetDelivery);
DeliveryRoutes.put("/:id/status", DeliveryController.UpdateDelivery);

export default DeliveryRoutes