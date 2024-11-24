import * as React from "react";
import { Box, Button } from "@mui/material";
import { MainContainer } from "../../components/containers/shared/MainContainer";
import { ProductForm } from "../../components/forms/products/ProductForm";
import { ProductService } from "../../adapters/api/products/ProductService";

export const CreateProductPage = () => {
  const [product, setProduct] = React.useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    costPrice: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const createdProduct = await ProductService.create(product);
      console.log("Product created:", createdProduct);
      alert("Produto criado com sucesso!");
      setProduct({
        id: "",
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        costPrice: 0,
      });
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
      alert("Falha ao criar o produto. Por favor, tente novamente.");
    }
  };

  return (
    <MainContainer
      width="150vh"
      height="70vh"
      title="NOVO PRODUTO"
      paddingX={8}
      paddingY={4}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <ProductForm product={product} setProduct={setProduct} />
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
