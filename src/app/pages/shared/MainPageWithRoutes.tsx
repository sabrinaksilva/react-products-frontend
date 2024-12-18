import React from "react";
import { useLocation } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { MainTopBar } from "../../components/navigation/topBars/MainTopBar";
import { ProductListingSection } from "../../components/listing/products/ProductListingSection";
import { mainPageWithRoutesTheme } from "../../styles/main/MainTheme";
import { CreateProductPage } from "../products/CreateProductPage";
import { InventoryTransactionsPage } from "../inventory/InventoryTransactionsPage";
import { EditProductPage } from "../products/EditProductPage";
import { CreateTransactionPage } from "../inventory/CreateTransactionPage";
import { StockPage } from "../inventory/StockPage";

export const MainPageWithRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={mainPageWithRoutesTheme}>
      <CssBaseline />
      <Box className="MuiBox-mainPageWithRoutes">
        <MainTopBar />
        <Box className="MuiBox-contentMainPageWithRoutes">
          {location.pathname === "/" && <ProductListingSection />}
          {location.pathname === "/products" && <ProductListingSection />}
          {location.pathname === "/products/new" && <CreateProductPage />}
          {location.pathname === "/products/edit" && <EditProductPage />}
          {location.pathname === "/cash-flow/overview" && <StockPage />}
          {location.pathname === "/cash-flow/transactions" && (
            <InventoryTransactionsPage />
          )}
          {location.pathname === "/cash-flow/transactions/new" && (
            <CreateTransactionPage />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
