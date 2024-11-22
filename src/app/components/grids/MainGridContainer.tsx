import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SideBar } from "./SideBar";
import { MainPageWithRoutes } from "../../pages/MainPageWithRoutes";
import { mainGridContainerTheme } from "../../styles/main/MainTheme";

export const MainGridContainer = () => {
  return (
    <ThemeProvider theme={mainGridContainerTheme}>
      <CssBaseline />
      <Box className="MuiBox-mainGridContainer">
        <Grid
          container
          spacing={0}
          className="MuiGrid-container-mainGridContainer"
        >
          <Grid size={2} className="MuiGrid-sidebar-mainGridContainer">
            <SideBar />
          </Grid>
          <Grid size={10} className="MuiGrid-mainContent-mainGridContainer">
            <MainPageWithRoutes />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
