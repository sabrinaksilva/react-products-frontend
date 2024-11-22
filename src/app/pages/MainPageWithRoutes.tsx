import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { MainTopBar } from "../components/topBar/MainTopBar";
import { StockSection } from "./StockSection";
import { ProductSection } from "./ProductSection";
import { Foo } from "../components/grids/foo";

export const MainPageWithRoutes: React.FC = () => {
  const location = useLocation();

  return (
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
          textAlign: "center",
          padding: 2,
        }}
      >
        {location.pathname === "/" && <StockSection />}
        {location.pathname === "/stock" && <StockSection />}
        {location.pathname === "/products" && <ProductSection />}
        {location.pathname === "/foo" && <Foo />}
      </Box>
    </Box>
  );
};
