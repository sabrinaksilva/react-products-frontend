import React from "react";
import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { filterButtonTheme } from "../../styles/buttons/ButtonsThemes";

export const FilterButton = () => {
  return (
    <ThemeProvider theme={filterButtonTheme}>
      <CssBaseline />
      <Box className="MuiBox-logOutButton">
        <Button
          variant="outlined"
          color="primary"
          className="MuiButton-logOutButton"
        >
          Filtrar
        </Button>
      </Box>
    </ThemeProvider>
  );
};
