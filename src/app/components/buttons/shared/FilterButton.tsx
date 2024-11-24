import React from "react";
import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { filterButtonTheme } from "../../../styles/buttons/ButtonsThemes";

export const FilterButton = () => {
  return (
    <Box className="MuiBox-logOutButton">
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: "14px",
          padding: "10px 20px",
          backgroundColor: "#884d0f",
          "&:hover": {
            backgroundColor: "#3e2305",
          },
        }}
      >
        Filtrar
      </Button>
    </Box>
  );
};
