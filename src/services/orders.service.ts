import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { Product } from '../types/Product';

async function getAllOrders(): Promise<Order[]> {
  const orders = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
  });

  const ordersList = orders.map((order: any) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product: Product) => product.id),
  }));

  return ordersList;
}

export default { getAllOrders };
