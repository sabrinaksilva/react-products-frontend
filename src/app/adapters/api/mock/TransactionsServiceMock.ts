import { Transaction } from "../../../domain/Transaction";
import { transactions } from "./MockedTransactions";

export const TransactionsServiceMock = {
  async getAll(): Promise<Transaction[]> {
    return transactions;
  },

  async getById(id: string): Promise<Transaction> {
    const transaction = transactions.find((t) => t.id === id);
    if (!transaction) {
      throw new Error(`Transaction with id ${id} not found`);
    }
    return transaction;
  },

  async create(transaction: Omit<Transaction, "id">): Promise<Transaction> {
    const newTransaction: Transaction = {
      ...transaction,
      id: (Math.random() * 1e6).toFixed(0),
    };
    transactions.push(newTransaction);
    return newTransaction;
  },

  async update(
    id: string,
    transaction: Omit<Transaction, "id">,
  ): Promise<Transaction> {
    const index = transactions.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error(`Transaction with id ${id} not found`);
    }
    const updatedTransaction: Transaction = { ...transaction, id };
    transactions[index] = updatedTransaction;
    return updatedTransaction;
  },

  async delete(id: string): Promise<void> {
    const index = transactions.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error(`Transaction with id ${id} not found`);
    }
    transactions.splice(index, 1);
  },
};
