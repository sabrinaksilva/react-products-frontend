import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "../styles/MainTheme";

const logo = require("../../assets/logo_sigma.png");

export const NavigationTopBar = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <AppBar position="static" color="primary" elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <img
                src={String(logo)}
                alt="Sigma Logo"
                style={{ height: "40px" }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              {["ESTOQUE", "PRODUTOS"].map((link) => (
                <Button
                  key={link}
                  color="inherit"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  {link}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
