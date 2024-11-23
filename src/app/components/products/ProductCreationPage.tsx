import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextInput } from "../input/TextInput";
import { Button, Box, Paper } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  lineHeight: "10px",
}));

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export const ProductCreationPage = () => {
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product created:", product);
  };

  return (
    <Item
      elevation={4}
      square={false}
      sx={{
        width: "120vh",
        height: "70vh",
        padding: 4,
        backgroundColor: "#F3EBDE",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#884d0f",
            fontSize: "24px",
          }}
        >
          Novo Produto
        </h1>
        <TextInput
          label="Nome"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <TextInput
          label="Descrição do Produto"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
          }}
        >
          <TextInput
            label="Preço"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: parseFloat(e.target.value) })
            }
          />
          <TextInput
            label="Quantidade atual"
            value={product.quantity}
            onChange={(e) =>
              setProduct({ ...product, quantity: parseFloat(e.target.value) })
            }
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#884d0f",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            marginTop: 2,
            "&:hover": {
              backgroundColor: "#3e2305",
            },
          }}
          type="submit"
        >
          Save Product
        </Button>
      </Box>
    </Item>
  );
};
