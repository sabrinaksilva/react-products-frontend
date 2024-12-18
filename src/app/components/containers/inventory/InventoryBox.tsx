import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Divider,
  Paper,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Transaction } from "../../../domain/Transaction";
import { TransactionTable } from "../../tables/transactions/TransactionsTable";

const inventoryTheme = createTheme({
  palette: {
    primary: {
      main: "#884d0f",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#884d0f",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#3e2305",
          },
        },
      },
    },
  },
});

const NewTransactionButton = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/cash-flow/transactions/new");

  return (
    <ThemeProvider theme={inventoryTheme}>
      <CssBaseline />
      <Box
        className="new-transaction-button-container"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Button
          className="new-transaction-button"
          variant="contained"
          onClick={handleClick}
        >
          NOVA TRANSAÇÃO
        </Button>
        <Box
          sx={{
            fontSize: "18px",
            color: "grey",
            display: "flex",
            alignItems: "center",
          }}
        >
          A idealização dessa tela, se houver tempo, seria histórico de
          transações de entrada/saída de produtos
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const SubTitleSection = () => {
  return (
    <Box
      className="subtitle-section-container"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
      }}
    >
      <NewTransactionButton />
    </Box>
  );
};

export const InventoryBox = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <Box
      className="cash-flow-box-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        maxHeight: "100%",
        overflow: "hidden",
      }}
    >
      <SubTitleSection />
      <Divider
        className="cash-flow-divider"
        sx={{ marginTop: 5, borderColor: "#884d0f" }}
      />
      <Paper
        className="cash-flow-paper"
        elevation={5}
        sx={{
          margin: 2,
          flex: 1,
          overflow: "auto",
        }}
      >
        <TransactionTable transactions={transactions} />
      </Paper>
    </Box>
  );
};
