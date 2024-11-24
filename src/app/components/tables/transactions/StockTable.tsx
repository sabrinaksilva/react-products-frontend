import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { mainTheme } from "../../../styles/main/MainTheme";
import { StockSummaryResponse } from "../../../adapters/api/dtos/stock/StockDTOS";

const theme = mainTheme;

const StockTableHeader = ({ label }: { label: string }) => {
  return (
    <TableCell
      style={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
      }}
    >
      {label}
    </TableCell>
  );
};

export const StocksTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <StockTableHeader label={"ID"} />
        <StockTableHeader label={"NOME"} />
        <StockTableHeader label={"VALOR UNITÁRIO"} />
        <StockTableHeader label={"QUANTIDADE"} />
        <StockTableHeader label={"VALOR TOTAL"} />
      </TableRow>
    </TableHead>
  );
};

export const StockTable = ({
  stockSummaries,
}: {
  stockSummaries: StockSummaryResponse[];
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <StocksTableHeader />
        <TableBody>
          {stockSummaries.map((summary) => (
            <TableRow
              key={summary.productId}
              style={{
                backgroundColor: theme.palette.custom.secondaryBackground,
              }}
            >
              <TableCell
                sx={{
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                {summary.productId}
              </TableCell>
              <TableCell
                sx={{
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                {summary.productName}
              </TableCell>
              <TableCell
                sx={{
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                {summary.productPrice.toFixed(2)}
              </TableCell>
              <TableCell
                sx={{
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                {summary.productQuantity}
              </TableCell>
              <TableCell>{summary.totalValue.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
