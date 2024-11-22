import React from "react";
import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import { logOutButtonTheme } from "../../styles/buttons/ButtonsThemes";

export const LogOutButton = () => {
  return (
    <ThemeProvider theme={logOutButtonTheme}>
      <CssBaseline />
      <Box className="MuiBox-logOutButton">
        <Button
          variant="outlined"
          color="primary"
          className="MuiButton-logOutButton"
        >
          Log out
        </Button>
      </Box>
    </ThemeProvider>
  );
};
