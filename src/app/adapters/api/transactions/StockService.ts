import axios from "axios";
import { StockResponse } from "../dtos/stock/StockDTOS";
import { API_URL } from "../../../shared/config";

const BASE_URL = `${API_URL}/stocks`;

export class StockService {
  static async getAll(productsIds?: string[]): Promise<StockResponse> {
    const params: Record<string, string[]> = {};
    if (productsIds) {
      params.product_ids = productsIds;
    }

    const response = await axios.get<StockResponse>(BASE_URL, { params });
    return response.data;
  }
}
