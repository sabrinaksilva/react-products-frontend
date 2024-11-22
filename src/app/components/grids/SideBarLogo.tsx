import React from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import logo from "../../../assets/logo_sigma.png";
import { logoTheme } from "../../styles/sidebar/LogoTheme";

export const SideBarLogo = () => {
  return (
    <ThemeProvider theme={logoTheme}>
      <CssBaseline />
      <Box className="MuiBox-sidebarLogo">
        <img src={String(logo)} alt="Logo Sigma" />
      </Box>
    </ThemeProvider>
  );
};
