import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productRouter = Router();

productRouter.post('/products', productsController.createProduct);
productRouter.get('/products', productsController.getAllProducts);

export default productRouter;