import axios from "axios";
import { Product } from "../../../domain/Product";
import { API_URL } from "../../../shared/config";

const BASE_URL = `${API_URL}/products`;

export class ProductService {
  static async getAll(name?: string, description?: string): Promise<Product[]> {
    const params: Record<string, string> = {};
    if (name) params.name = name;
    if (description) params.description = description;

    const response = await axios.get<Product[]>(BASE_URL, { params });
    return response.data;
  }

  static async getById(id: string): Promise<Product> {
    const response = await axios.get<Product>(`${BASE_URL}/${id}`);
    return response.data;
  }

  static async create(product: Omit<Product, "id">): Promise<Product> {
    const response = await axios.post<Product>(BASE_URL, product);
    return response.data;
  }

  static async update(
    id: string,
    product: Omit<Product, "id">,
  ): Promise<Product> {
    const response = await axios.put<Product>(`${BASE_URL}/${id}`, product);
    return response.data;
  }

  static async delete(id: string): Promise<void> {
    await axios.delete(`${BASE_URL}/${id}`);
  }
}
