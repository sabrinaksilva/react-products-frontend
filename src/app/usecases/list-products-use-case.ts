import { ProductServiceMock } from "../adapters/api/mock/ProductServiceMock";
import { Product } from "../domain/Product";

export class ListProductsUseCase {
  constructor(private productService: ProductServiceMock) {}

  async getAll(): Promise<Product[]> {
    return await this.productService.getAll();
  }
}
