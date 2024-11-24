import { MainContainer } from "../../components/containers/shared/MainContainer";
import React, { useEffect, useState } from "react";
import {
  StockResponse,
  StockSummaryResponse,
} from "../../adapters/api/dtos/stock/StockDTOS";
import { StockTable } from "../../components/tables/transactions/StockTable";
import { StockService } from "../../adapters/api/transactions/StockService";

export const StockPage = () => {
  const [stock, setStock] = useState<StockResponse | null>(null);
  const [stockSummaries, setStockSummaries] = useState<StockSummaryResponse[]>(
    [],
  );

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const stockResponse = await StockService.getAll();
        setStock(stockResponse);
        setStockSummaries(stockResponse.summaries);
      } catch (error) {
        console.error("Erro ao carregar o estoque:", error);
      }
    };

    fetchStock();
  }, []);

  return (
    <MainContainer
      width="150vh"
      height="100%"
      title="FLUXO DE CAIXA - ESTOQUE"
      paddingX={8}
      paddingY={4}
    >
      {stock ? (
        <StockTable stockSummaries={stockSummaries} />
      ) : (
        <div>Carregando...</div>
      )}
    </MainContainer>
  );
};
