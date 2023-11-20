import express from 'express';
import productRouter from './routers/products.router';
import ordersRouter from './routers/orders.router';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(ordersRouter);

export default app;
