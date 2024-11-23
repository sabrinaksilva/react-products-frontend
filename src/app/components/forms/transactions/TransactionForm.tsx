import * as React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import InputMask from "react-input-mask";

export interface TransactionFormProps {
  transaction: {
    date: string;
    productId: string;
    type: string;
    productQuantity: number;
  };
  setTransaction: (updatedTransaction: {
    date: string;
    productId: string;
    type: string;
    productQuantity: number;
  }) => void;
  isReadOnly?: boolean;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
  transaction,
  setTransaction,
  isReadOnly = false,
}) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransaction({ ...transaction, date: e.target.value });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        paddingTop: 4,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <InputMask
          mask="99/99/9999"
          value={transaction.date}
          onChange={handleDateChange}
          disabled={isReadOnly}
        >
          {(inputProps: any) => (
            <TextField
              {...inputProps}
              label="Data"
              helperText="Data (dd/MM/yyyy)"
              fullWidth
              required
              sx={{ flex: 2, maxWidth: "300px", fontSize: "1.2rem" }}
            />
          )}
        </InputMask>
        <TextField
          label="Quantidade"
          helperText="Quantidade"
          value={transaction.productQuantity}
          onChange={(e) =>
            setTransaction({
              ...transaction,
              productQuantity: Math.max(0, parseInt(e.target.value || "0")),
            })
          }
          fullWidth
          required
          type="number"
          InputProps={{
            readOnly: isReadOnly,
          }}
          inputProps={{ min: 0 }}
          sx={{ flex: 1, maxWidth: "150px", fontSize: "1.2rem" }}
        />
        <TextField
          select
          label="Tipo"
          helperText="Tipo"
          value={transaction.type}
          onChange={(e) =>
            setTransaction({ ...transaction, type: e.target.value })
          }
          fullWidth
          required
          InputProps={{
            readOnly: isReadOnly,
          }}
          sx={{ flex: 1, maxWidth: "150px", fontSize: "1.2rem" }}
        >
          <MenuItem value="in">ENTRADA</MenuItem>
          <MenuItem value="out">SAÍDA</MenuItem>
        </TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          label="Produto"
          helperText="Produto"
          value={transaction.productId}
          onChange={(e) =>
            setTransaction({ ...transaction, productId: e.target.value })
          }
          fullWidth
          required
          InputProps={{
            readOnly: isReadOnly,
          }}
          sx={{ maxWidth: "400px", fontSize: "1.2rem" }}
        />
      </Box>
    </Box>
  );
};
