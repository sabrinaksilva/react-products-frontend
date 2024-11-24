import * as React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";

export interface ProductFormProps {
  product: any;
  setProduct: (updatedProduct: any) => void;
  isReadOnly?: boolean;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  setProduct,
  isReadOnly = false,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
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
          helperText={
            isReadOnly
              ? "Alterações de estoque devem ser feitas por meio de uma movimentação de caixa"
              : "Quantidade inicial disponível, se aplicável."
          }
          value={product.quantity}
          onChange={(e) =>
            !isReadOnly &&
            setProduct({
              ...product,
              quantity: parseFloat(e.target.value || "0"),
            })
          }
          InputProps={{
            readOnly: isReadOnly,
          }}
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
        {/*<TextField*/}
        {/*  label="Preço de custo"*/}
        {/*  helperText="Custo total relacionado à aquisição ou fabricação do produto, matérias primas, mão de obra, impostos e demais despesas"*/}
        {/*  value={product.costPrice}*/}
        {/*  onChange={(e) =>*/}
        {/*    setProduct({*/}
        {/*      ...product,*/}
        {/*      costPrice: parseFloat(e.target.value || "0"),*/}
        {/*    })*/}
        {/*  }*/}
        {/*  InputProps={{*/}
        {/*    startAdornment: (*/}
        {/*      <InputAdornment position="start">R$</InputAdornment>*/}
        {/*    ),*/}
        {/*  }}*/}
        {/*  type="number"*/}
        {/*  sx={{ flex: 1 }}*/}
        {/*/>*/}
      </Box>
    </Box>
  );
};
