import React from "react";
import { useLocation } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { MainTopBar } from "../../components/navigation/topBars/MainTopBar";
import { ProductListingSection } from "../../components/listing/products/ProductListingSection";
import { Foo } from "../../components/foo";
import { mainPageWithRoutesTheme } from "../../styles/main/MainTheme";
import { ProductCreationPage } from "../products/ProductCreationPage";
import { CashFlowTransactionsPage } from "../cashFlow/CashFlowTransactionsPage";

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
          {location.pathname === "/products/new" && <ProductCreationPage />}
          {location.pathname === "/cash-flow/overview" && <Foo />}
          {location.pathname === "/cash-flow/transactions" && (
            <CashFlowTransactionsPage />
          )}
          {location.pathname === "/cash-flow/transactions/new" && <Foo />}

          {location.pathname === "/foo" && <Foo />}
        </Box>
      </Box>
    </ThemeProvider>
  );
};