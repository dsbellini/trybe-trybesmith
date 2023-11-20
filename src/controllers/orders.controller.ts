import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const serviceResponse = await ordersService.getAllOrders();
  res.status(200).json(serviceResponse);
};

export default { getAllOrders };