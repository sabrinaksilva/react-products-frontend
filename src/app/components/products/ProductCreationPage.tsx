import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Box,
  Paper,
  InputAdornment,
  Divider,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  lineHeight: "10px",
}));

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  costPrice: number;
}

export const ProductCreationPage = () => {
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    costPrice: 0,
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
        width: "150vh",
        height: "70vh",
        padding: 4,
        backgroundColor: "#F3EBDE",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", paddingBottom: 2, textAlign: "left" }}>
        <h1
          style={{
            fontFamily: "Geneva, sans-serif",
            fontWeight: "bold",
            color: "#884d0f",
            fontSize: "24px",
            margin: 20,
          }}
        >
          NOVO PRODUTO
        </h1>
        <Divider sx={{ marginTop: 5, borderColor: "#884d0f" }} />
      </Box>

      <Box
        component="form"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          paddingX: 8,
        }}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
          }}
        >
          <TextField
            label="Nome"
            helperText="Nome do Produto"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            fullWidth
            sx={{ flex: 7 }}
          />
          <TextField
            label="Quantidade"
            helperText="Quantidade inicial disponível, se aplicável."
            value={product.quantity}
            onChange={(e) =>
              setProduct({
                ...product,
                quantity: parseFloat(e.target.value || "0"),
              })
            }
            type="number"
            sx={{ flex: 3 }}
          />
        </Box>
        <TextField
          label="Descrição do Produto"
          helperText="Uma breve descrição, se necessário"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value || "" })
          }
          fullWidth
          sx={{ maxWidth: "100%" }}
        />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
          }}
        >
          <TextField
            label="Preço de venda"
            helperText="Preço de Venda ao Consumidor (PVC)"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: parseFloat(e.target.value || "0"),
              })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            required
            type="number"
            sx={{ flex: 1 }}
          />
          <TextField
            label="Preço de custo"
            helperText="Custo total relacionado à aquisição ou fabricação do produto, matérias primas, mão de obra, impostos e demais despesas"
            value={product.costPrice}
            onChange={(e) =>
              setProduct({
                ...product,
                costPrice: parseFloat(e.target.value || "0"),
              })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            type="number"
            sx={{ flex: 1 }}
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
            "&:hover": {
              backgroundColor: "#3e2305",
            },
          }}
          type="submit"
        >
          Salvar
        </Button>
      </Box>
    </Item>
  );
};
