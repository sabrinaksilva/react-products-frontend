import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, CssBaseline, TextField, ThemeProvider } from "@mui/material";
import { mainTheme } from "../../../styles/main/MainTheme";
import { FilterButton } from "../../buttons/shared/FilterButton";
import { useFilterContext } from "../../../../context/products/ProductsFilterContext";

export const MainTopBar: React.FC = () => {
  const {
    productName,
    setProductName,
    productDescription,
    setProductDescription,
  } = useFilterContext();
  const location = useLocation();
  const isProductsPage = location.pathname === "/products";

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={5}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "16px",
          }}
        >
          {isProductsPage && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginLeft: "auto",
              }}
            >
              <TextField
                label="Nome"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  minWidth: "450px",
                }}
              />

              <TextField
                label="Descrição"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  minWidth: "650px",
                }}
              />

              <FilterButton />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
