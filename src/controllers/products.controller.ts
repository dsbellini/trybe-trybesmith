import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function createProduct(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const product = { name, price, orderId };
  const serviceResponse = await productsService.createProduct(product);
  res.status(201).json(serviceResponse);
}

export default { createProduct };