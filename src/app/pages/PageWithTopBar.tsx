import React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MainTopBar } from "../components/MainTopBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D1928",
    },
    secondary: {
      main: "#F28E35",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const PageWithTopBar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <MainTopBar />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Aqui vai algum componente
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PageWithTopBar;
