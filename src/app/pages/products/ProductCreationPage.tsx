import * as React from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { MainContainer } from "../../components/containers/shared/MainContainer";

export const ProductCreationPage = () => {
  const [product, setProduct] = React.useState({
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
    <MainContainer
      width="150vh"
      height="70vh"
      title="NOVO PRODUTO"
      paddingX={8}
      paddingY={4}
    >
      <Box
        component="form"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
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
    </MainContainer>
  );
};
