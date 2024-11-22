import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { TopBarButton } from "./TopBarButton";
import { LogOutButton } from "./LogOutButton";
import {
  mainToolBarTheme,
  mainTopBarToolBarTheme,
} from "../../styles/main/topBar/MainTopBarThemes";
import { mainTheme } from "../../styles/main/MainTheme";

export const MainTopBar: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppBar
        className="MuiAppBar-main"
        position="static"
        color="primary"
        elevation={0}
      >
        <ThemeProvider theme={mainToolBarTheme}>
          <Toolbar className="MuiToolBar-main" disableGutters>
            <ThemeProvider theme={mainTopBarToolBarTheme}>
              <Box className="MuiBox-main">
                <Box className="MuiBox-buttons">
                  <TopBarButton label="PRODUTOS" route="/products" />
                  <TopBarButton label="ESTOQUE" route="/stock" />
                </Box>
              </Box>
            </ThemeProvider>
            <LogOutButton />
          </Toolbar>
        </ThemeProvider>
      </AppBar>
    </ThemeProvider>
  );
};
