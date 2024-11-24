import { MainContainer } from "../../components/containers/shared/MainContainer";
import React, { useEffect, useState } from "react";
import {
  StockResponse,
  StockSummaryResponse,
} from "../../adapters/api/dtos/inventory/StockDTOS";
import { StockTable } from "../../components/tables/transactions/StockTable";
import { StockService } from "../../adapters/api/inventory/StockService";
import { Box } from "@mui/material";
import { StockIndicatorCard } from "../../components/cards/StockIndicatorCard";

const setNumberAsText = ({
  value,
  fetchedProducts,
  formatAsCurrency = false,
}: {
  value?: number | string | null | undefined;
  fetchedProducts?: boolean | null | undefined;
  formatAsCurrency?: boolean;
}) => {
  if (!fetchedProducts || value == null) {
    return "Carregando...";
  }

  try {
    const stringValue = value.toString();
    if (formatAsCurrency && !isNaN(Number(stringValue))) {
      return `R$ ${stringValue}`;
    }
    return stringValue;
  } catch (e) {
    return " - ";
  }
};

export const StockPage = () => {
  const [stock, setStock] = useState<StockResponse | null>(null);
  const [stockSummaries, setStockSummaries] = useState<
    StockSummaryResponse[] | null
  >([]);

  const [numberOfUniqueProducts, setNumberOfUniqueProducts] =
    useState<string>("Carregando...");
  const [totalGrossValue, setTotalGrossValue] =
    useState<string>("Carregando...");
  const [totalProductsQuantitySum, setTotalProductsQuantitySum] =
    useState<string>("Carregando...");

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const stockResponse = await StockService.getAll();
        setStock(stockResponse);
        setStockSummaries(stockResponse.summaries);

        const fetchedProducts = stockResponse !== null;

        setTotalProductsQuantitySum(
          setNumberAsText({
            value: stockResponse?.totalProducts,
            fetchedProducts: fetchedProducts,
          }),
        );

        setTotalGrossValue(
          setNumberAsText({
            value: stockResponse?.totalValue,
            fetchedProducts: fetchedProducts,
            formatAsCurrency: true,
          }),
        );

        setNumberOfUniqueProducts(
          setNumberAsText({
            value: stockResponse?.summaries?.length,
            fetchedProducts: fetchedProducts,
          }),
        );
      } catch (error) {
        console.error("Erro ao carregar o estoque:", error);

        setNumberOfUniqueProducts(" - ");
        setTotalGrossValue(" - ");
        setTotalProductsQuantitySum(" - ");
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
      >
        <StockIndicatorCard
          topText="Produtos Únicos"
          midText={numberOfUniqueProducts}
          bottomText="Variedades de produtos"
          boxWidth="100%"
        />
        <StockIndicatorCard
          topText="Valor Bruto Total"
          midText={totalGrossValue}
          bottomText="Valor total acumulado em estoque."
          boxWidth="100%"
        />
        <StockIndicatorCard
          topText="Quantidade Total"
          midText={totalProductsQuantitySum}
          bottomText="Unidades de produtos"
          boxWidth="100%"
        />
      </Box>

      {stock ? (
        <StockTable stockSummaries={stockSummaries ?? []} />
      ) : (
        <div>Carregando...</div>
      )}
    </MainContainer>
  );
};
