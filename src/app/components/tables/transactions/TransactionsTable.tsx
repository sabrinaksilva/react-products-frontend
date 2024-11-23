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
import { Transaction } from "../../../domain/Transaction";

const theme = mainTheme;

const TransactionTableHeader = ({ label }: { label: string }) => {
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

export const TransactionsTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TransactionTableHeader label={"Id"} />
        <TransactionTableHeader label={"Data"} />
        <TransactionTableHeader label={"Código do Produto"} />
        <TransactionTableHeader label={"Tipo"} />
        <TransactionTableHeader label={"Quantidade"} />
        <TransactionTableHeader label={"Valor Total"} />
      </TableRow>
    </TableHead>
  );
};

export const TransactionTable = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <TableContainer component={Paper} elevation={5} sx={{ overflow: "hidden" }}>
      <Table>
        <TransactionsTableHeader />
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              style={{
                backgroundColor: theme.palette.custom.secondaryBackground,
              }}
            >
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.date.toLocaleDateString()}</TableCell>
              <TableCell>{transaction.productId}</TableCell>
              <TableCell>
                {transaction.type === "in" ? "Entrada" : "Saída"}
              </TableCell>
              <TableCell>{transaction.productQuantity}</TableCell>
              <TableCell>{transaction.totalValue.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
