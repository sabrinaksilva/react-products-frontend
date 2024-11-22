import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { SideBar } from "./SideBar";
import { MainPageWithRoutes } from "../../pages/MainPageWithRoutes";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const MainGridContainer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={2}>
          <SideBar />
        </Grid>
        <Grid size={10}>
          <MainPageWithRoutes />
        </Grid>
      </Grid>
    </Box>
  );
};
