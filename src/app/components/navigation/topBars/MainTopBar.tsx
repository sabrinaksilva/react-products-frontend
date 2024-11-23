import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, CssBaseline, TextField, ThemeProvider } from "@mui/material";
import { NavigationButton } from "../../buttons/shared/NavigationButton";
import { mainTheme } from "../../../styles/main/MainTheme";
import { FilterButton } from "../../buttons/shared/FilterButton";

export const MainTopBar: React.FC = () => {
  const [productName, setProductName] = React.useState("");
  const [productDescription, setProductDescription] = React.useState("");
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <NavigationButton label="PRODUTOS" route="/products" />
            <NavigationButton label="ESTOQUE" route="/stock" />
          </Box>

          {isProductsPage && (
            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <TextField
                label="Nome"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  minWidth: "300px",
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
                  minWidth: "450px",
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
