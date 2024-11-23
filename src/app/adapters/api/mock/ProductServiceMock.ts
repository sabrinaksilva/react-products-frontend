import { Product } from "../../../domain/Product";
import { productList } from "./MockedProducts";
import { v4 as uuidv4 } from "uuid";

const products = productList;

export class ProductServiceMock {
  public async getAll(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 100);
    });
  }

  public async getById(id: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      const product = products.find((p) => p.id === id);
      setTimeout(() => {
        product ? resolve(product) : reject(new Error("Product not found"));
      }, 200);
    });
  }

  public async create(product: Omit<Product, "id">): Promise<Product> {
    return new Promise((resolve) => {
      const newProduct = { ...product, id: uuidv4() };
      products.push(newProduct);
      setTimeout(() => resolve(newProduct), 200);
    });
  }

  public async update(
    id: string,
    product: Omit<Product, "id">,
  ): Promise<Product> {
    return new Promise((resolve, reject) => {
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) {
        products[index] = { ...products[index], ...product };
        setTimeout(() => resolve(products[index]), 200);
      } else {
        setTimeout(() => reject(new Error("Product not found")), 200);
      }
    });
  }

  public async delete(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) {
        products.splice(index, 1);
        setTimeout(() => resolve(), 200);
      } else {
        setTimeout(() => reject(new Error("Product not found")), 200);
      }
    });
  }
}
