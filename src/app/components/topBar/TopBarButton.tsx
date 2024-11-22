import React from "react";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mainTopBarButtonTheme } from "../../styles/main/topBar/MainTopBarThemes";

export const TopBarButton = ({
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
