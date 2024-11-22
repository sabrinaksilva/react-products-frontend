import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "../styles/MainTheme";
import { TopBarLogo } from "./TopBarLogo";
import { TopBarButton } from "./TopBarButton";
import { LogOutButton } from "./LogOutButton";

export const MainTopBar: React.FC = () => {
  return (
    <ThemeProvider theme={MainTheme}>
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
              <TopBarButton label="ESTOQUE" route="/stock" />
              <TopBarButton label="PRODUTOS" route="/products" />
            </Box>
            <LogOutButton />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
