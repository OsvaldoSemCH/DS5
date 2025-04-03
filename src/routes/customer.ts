import express, {Router} from 'express';
import CustomerController from '../controllers/customer.ts';
import { VerifyCustomerLogin, VerifyCustomerRegister } from '../filters/customer.ts';

const CustomerRoutes : Router = express.Router();

CustomerRoutes.post('/', VerifyCustomerRegister, CustomerController.Register);
CustomerRoutes.post('/login', VerifyCustomerLogin, CustomerController.Login);
CustomerRoutes.get("/:id/orders", CustomerController.GetOrders);
CustomerRoutes.delete("/:id", CustomerController.DeleteCustomer);

export default CustomerRoutes