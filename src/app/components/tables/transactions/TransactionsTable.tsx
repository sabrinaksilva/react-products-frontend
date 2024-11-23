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
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      {label}
    </TableCell>
  );
};

export const TransactionsTableHeader = () => {
  return (
    <TableHead>
      <TableRow
        style={{
          backgroundColor: theme.palette.custom.secondaryBackground,
        }}
      >
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
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const renderTransactionType = (type: "in" | "out") => {
    return (
      <span
        style={{
          fontWeight: "bold",
          color: type === "in" ? "green" : "red",
        }}
      >
        {type === "in" ? "ENTRADA" : "SAÍDA"}
      </span>
    );
  };

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
              <TableCell>{formatDate(new Date(transaction.date))}</TableCell>
              <TableCell>{transaction.productId}</TableCell>
              <TableCell>{renderTransactionType(transaction.type)}</TableCell>
              <TableCell>{transaction.productQuantity}</TableCell>
              <TableCell>R$ {transaction.totalValue.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
