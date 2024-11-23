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

const cashFlowTheme = createTheme({
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
    <ThemeProvider theme={cashFlowTheme}>
      <CssBaseline />
      <Box
        className="new-transaction-button-container"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          paddingTop: 2,
          paddingLeft: 2,
        }}
      >
        <Button
          className="new-transaction-button"
          variant="contained"
          onClick={handleClick}
        >
          NOVA TRANSAÇÃO
        </Button>
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

export const CashFlowBox = ({
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
        height: "100vh%", // Ajusta para ocupar o espaço disponível
        width: "100%", // Garante que o Box não ultrapasse o componente pai
        maxHeight: "100%", // Limita a altura para não exceder o pai
        overflow: "hidden", // Impede que elementos internos ultrapassem os limites
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
