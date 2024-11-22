import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "../../styles/MainTheme";
import { TopBarButton } from "./TopBarButton";
import { LogOutButton } from "./LogOutButton";

export const MainTopBar: React.FC = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{
          width: "100%",
          left: 0,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <TopBarButton label="PRODUTOS" route="/products" />
              <TopBarButton label="ESTOQUE" route="/stock" />
            </Box>
          </Box>
          <LogOutButton />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
