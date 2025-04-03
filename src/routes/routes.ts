import { Express } from 'express';
import express from 'express';
import CustomerRoutes from './customer.ts';
import CarrierRoutes from './carrier.ts';

export default function InitRoutes(app: Express)
{
    app.use(express.json())
    app.use("/customers", CustomerRoutes)
    app.use("/carriers", CarrierRoutes)
}