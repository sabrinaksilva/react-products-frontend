import { Product } from "../domain/Product";

export const createProduct = (
  id: string,
  name: string,
  description: string,
  price: number,
  costPrice: number,
  quantity: number,
): Product => {
  return {
    id,
    name,
    description,
    price,
    costPrice,
    quantity,
  };
};
