import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SideBar } from "../../navigation/sidebars/SideBar";
import { MainPageWithRoutes } from "../../../pages/shared/MainPageWithRoutes";
import { mainGridContainerTheme } from "../../../styles/main/MainTheme";
import { useLocation } from "react-router-dom";

export const GridContainer = () => {
  const location = useLocation();
  const shouldExpandSideBar = location.pathname === "/login";
  const layoutConfig =
    location.pathname === "/login"
      ? { sideBar: 4, mainContent: 8 }
      : { sideBar: 2, mainContent: 10 };

  return (
    <ThemeProvider theme={mainGridContainerTheme}>
      <CssBaseline />
      <Box className="MuiBox-mainGridContainer">
        <Grid
          container
          spacing={0}
          className="MuiGrid-container-mainGridContainer"
        >
          <Grid
            size={layoutConfig.sideBar}
            className="MuiGrid-sidebar-mainGridContainer"
          >
            <SideBar />
          </Grid>
          <Grid
            size={layoutConfig.mainContent}
            className="MuiGrid-mainContent-mainGridContainer"
          >
            <MainPageWithRoutes />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
