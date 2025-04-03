import express, {Router} from 'express';
import CarrierController from '../controllers/carrier.ts';
import { VerifyCarrierRegister } from '../filters/carrier.ts';

const CarrierRoutes : Router = express.Router();

CarrierRoutes.post('/', VerifyCarrierRegister, CarrierController.Register);
CarrierRoutes.get("/:id/deliveries", CarrierController.GetDeliveries);

export default CarrierRoutes