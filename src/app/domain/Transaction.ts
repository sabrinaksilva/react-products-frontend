export interface Transaction {
  id: string;
  date: Date;
  productId: string;
  type: "in" | "out";
  productQuantity: number;
  totalValue: number;
}
