import axios from "axios";
import { Product } from "../../domain/Product";
import { API_URL } from "../../shared/config";

export const ProductService = {
  async getAll(): Promise<Product[]> {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
  },

  async getById(id: number): Promise<Product> {
    const response = await axios.get<Product>(`${API_URL}/${id}`);
    return response.data;
  },

  async create(product: Omit<Product, "id">): Promise<Product> {
    const response = await axios.post<Product>(API_URL, product);
    return response.data;
  },

  async update(id: number, product: Omit<Product, "id">): Promise<Product> {
    const response = await axios.put<Product>(`${API_URL}/${id}`, product);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  },
};
