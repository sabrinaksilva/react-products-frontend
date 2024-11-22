import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "../styles/MainTheme";
import { TopBarLogo } from "./TopBarLogo";
import { StockSection } from "../pages/StockSection";
import { ProductSection } from "../pages/ProductSection";
import { TopBarButton } from "./TopBarButton";
import { LogOutButton } from "./LogOutButton";

export const MainTopBar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<React.ReactNode>(
    <StockSection />,
  );

  const handleNavigation = (page: React.ReactNode) => {
    setCurrentPage(page);
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AppBar position="static" color="primary" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <TopBarLogo />

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  marginLeft: 4,
                }}
              >
                <TopBarButton
                  label="ESTOQUE"
                  onClick={() => handleNavigation(<StockSection />)}
                />

                <TopBarButton
                  label="PRODUTOS"
                  onClick={() => handleNavigation(<ProductSection />)}
                />
              </Box>

              <LogOutButton />
            </Toolbar>
          </Container>
        </AppBar>

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
          {currentPage}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
