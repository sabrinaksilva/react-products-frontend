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
import { Product } from "../../../domain/Product";

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
        <ProductTableHeader label={"Nome"} />
        <ProductTableHeader label={"Descrição"} />
        <ProductTableHeader label={"Custo Unitário"} />
        <ProductTableHeader label={"Preço final unitário"} />
        <ProductTableHeader label={"Quantidade"} />
      </TableRow>
    </TableHead>
  );
};

export const ProductTable = ({ product }: { product: Product }) => {
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
            <TableCell
              sx={{
                borderRight: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              {product.name}
            </TableCell>
            <TableCell
              sx={{
                borderRight: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              {product.description}
            </TableCell>
            <TableCell
              sx={{
                borderRight: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              {product.costPrice.toFixed(2)}
            </TableCell>
            <TableCell
              sx={{
                borderRight: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              {product.price.toFixed(2)}
            </TableCell>
            <TableCell>{product.quantity}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
