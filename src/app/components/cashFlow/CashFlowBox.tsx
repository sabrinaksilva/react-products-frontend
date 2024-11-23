import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import React from "react";
import Divider from "@mui/material/Divider";

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
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          paddingTop: 2,
          paddingLeft: 2,
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          NOVA TRANSAÇÃO
        </Button>
      </Box>
    </ThemeProvider>
  );
};

const SubTitleSection = () => {
  return (
    <Box
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

export const CashFlowBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        flex: 1,
        overflow: "auto",
      }}
    >
      <SubTitleSection />
      <Divider sx={{ marginTop: 5, borderColor: "#884d0f" }} />
    </Box>
  );
};
