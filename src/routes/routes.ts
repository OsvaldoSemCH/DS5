import { Express } from 'express';
import express from 'express';
import CustomerRoutes from './customer.ts';
import CarrierRoutes from './carrier.ts';
import ProductRoutes from './product.ts';
import OrderRoutes from './order.ts';
import DeliveryRoutes from './delivery.ts';
import DeliveryController from '../controllers/delivery.ts';

export default function InitRoutes(app: Express)
{
    app.use(express.json())
    app.use("/customers", CustomerRoutes)
    app.use("/carriers", CarrierRoutes)
    app.use("/products", ProductRoutes)
    app.use("/orders", OrderRoutes)
    app.use("/deliveries", DeliveryRoutes)
    app.get("/tracking/:id", DeliveryController.Track)
}