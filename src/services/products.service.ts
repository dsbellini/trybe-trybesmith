import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(product: ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
}

async function getAllProducts(): Promise<Product[]> {
  const products = await ProductModel.findAll();
  const productsList = products.map((product) => product.dataValues);
  return productsList;
}

export default { createProduct, getAllProducts };