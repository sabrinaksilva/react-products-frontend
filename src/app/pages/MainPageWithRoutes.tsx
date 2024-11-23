import React from "react";
import { useLocation } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { MainTopBar } from "../components/topBar/MainTopBar";
import { StockListingSection } from "./StockListingSection";
import { ProductListingSection } from "./ProductListingSection";
import { Foo } from "../components/foo";
import { mainPageWithRoutesTheme } from "../styles/main/MainTheme";
import { ProductCreationPage } from "../components/products/ProductCreationPage";

export const MainPageWithRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={mainPageWithRoutesTheme}>
      <CssBaseline />
      <Box className="MuiBox-mainPageWithRoutes">
        <MainTopBar />
        <Box className="MuiBox-contentMainPageWithRoutes">
          {location.pathname === "/" && <ProductListingSection />}
          {location.pathname === "/stock" && <StockListingSection />}
          {location.pathname === "/products" && <ProductListingSection />}
          {location.pathname === "/products/new" && <ProductCreationPage />}
          {location.pathname === "/foo" && <Foo />}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
