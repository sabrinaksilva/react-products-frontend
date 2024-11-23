import React from "react";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

const mainTopBarButtonTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiButton-mainTopBarButton": {
          fontSize: "14px",
          fontWeight: "bold",
          textTransform: "none",
        },
      },
    },
  },
});

export const NavigationButton = ({
  label,
  route,
}: {
  label: string;
  route: string;
}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(route);

  return (
    <ThemeProvider theme={mainTopBarButtonTheme}>
      <CssBaseline />
      <Button
        color="inherit"
        className="MuiButton-mainTopBarButton"
        onClick={handleClick}
      >
        {label}
      </Button>
    </ThemeProvider>
  );
};
