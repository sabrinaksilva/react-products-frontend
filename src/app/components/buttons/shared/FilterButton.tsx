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
          fontSize: "12px",
          padding: "5px 10px",
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
