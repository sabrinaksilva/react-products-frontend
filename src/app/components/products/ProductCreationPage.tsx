import * as React from "react";
import { useState } from "react";
import { TextField, Button, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export const ProductTextInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <TextField label={label} value={value} onChange={onChange} fullWidth />
  );
};

export const ProductCreationPage = () => {
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]:
        name === "price" || name === "quantity" ? parseFloat(value) : value,
    });
  };

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
        <ProductTextInput
          label="Nome"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <ProductTextInput
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
          <ProductTextInput
            label="Preço"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: parseFloat(e.target.value) })
            }
          />
          <ProductTextInput
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
