export interface StockSummaryResponse {
  productId: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  totalValue: number;
}

export interface StockResponse {
  summaries: StockSummaryResponse[];
  totalValue: number;
  totalProducts: number;
}
