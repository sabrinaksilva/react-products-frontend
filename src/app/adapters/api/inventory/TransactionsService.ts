import axios from "axios";
import { Transaction } from "../../../domain/Transaction";
import { API_URL } from "../../../shared/config";

export const TransactionsService = {
  async getAll(): Promise<Transaction[]> {
    const response = await axios.get<Transaction[]>(`${API_URL}/transactions`);
    return response.data;
  },

  async getById(id: string): Promise<Transaction> {
    const response = await axios.get<Transaction>(
      `${API_URL}/transactions/${id}`,
    );
    return response.data;
  },

  async create(transaction: Omit<Transaction, "id">): Promise<Transaction> {
    const response = await axios.post<Transaction>(
      `${API_URL}/transactions`,
      transaction,
    );
    return response.data;
  },

  async update(
    id: string,
    transaction: Omit<Transaction, "id">,
  ): Promise<Transaction> {
    const response = await axios.put<Transaction>(
      `${API_URL}/transactions/${id}`,
      transaction,
    );
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await axios.delete(`${API_URL}/transactions/${id}`);
  },
};
