import * as React from "react";
import { useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { MainContainer } from "../../components/containers/shared/MainContainer";
import { Product } from "../../domain/Product";
import { ProductForm } from "../../components/forms/products/ProductForm";

export const EditProductPage = () => {
  const { state } = useLocation();
  const { product } = state as { product: Product };

  const [editedProduct, setEditedProduct] = React.useState(product);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product updated:", editedProduct);
  };

  return (
    <MainContainer
      width="150vh"
      height="70vh"
      title={`Produto ${editedProduct.id}`}
      paddingX={8}
      paddingY={4}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <ProductForm
          product={editedProduct}
          setProduct={setEditedProduct}
          isReadOnly
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#884d0f",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#3e2305",
            },
          }}
          type="submit"
        >
          Salvar
        </Button>
      </Box>
    </MainContainer>
  );
};
