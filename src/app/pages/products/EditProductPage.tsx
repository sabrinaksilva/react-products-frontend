import * as React from "react";
import { useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { MainContainer } from "../../components/containers/shared/MainContainer";
import { Product } from "../../domain/Product";
import { ProductForm } from "../../components/forms/products/ProductForm";
import { ProductService } from "../../adapters/api/products/ProductService";

export const EditProductPage = () => {
  const { state } = useLocation();
  const { product } = state as { product: Product };

  const [editedProduct, setEditedProduct] = React.useState(product);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedProduct = await ProductService.update(
        editedProduct.id,
        editedProduct,
      );
      console.log("Product updated:", updatedProduct);
      alert("Produto atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
      alert("Falha ao atualizar o produto. Por favor, tente novamente.");
    }
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
          isReadOnly={false}
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
