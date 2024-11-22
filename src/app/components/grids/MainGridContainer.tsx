import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { SideBar } from "./SideBar";
import { MainPageWithRoutes } from "../../pages/MainPageWithRoutes";

export const MainGridContainer = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid size={2} sx={{ height: "100%", backgroundColor: "blue" }}>
          <SideBar />
        </Grid>
        <Grid
          size={10}
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <MainPageWithRoutes />
        </Grid>
      </Grid>
    </Box>
  );
};
