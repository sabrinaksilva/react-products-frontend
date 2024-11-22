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
import { mainTheme } from "../../styles/main/MainTheme";
import { Product } from "../../domain/Product";

const theme = mainTheme;

const ProductTableHeader = ({ label }: { label: string }) => {
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

export const ProductsTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <ProductTableHeader label={"ID"} />
        <ProductTableHeader label={"Nome"} />
        <ProductTableHeader label={"Descrição"} />
        <ProductTableHeader label={"Preço unitário"} />
        <ProductTableHeader label={"Quantidade em estoque"} />
      </TableRow>
    </TableHead>
  );
};

export const ProductTable = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <ProductsTableHeader />
        <TableBody>
          <TableRow
            key={product.id}
            style={{
              backgroundColor: theme.palette.custom.secondaryBackground,
            }}
          >
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.price.toFixed(2)}</TableCell>
            <TableCell>{product.quantity}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
