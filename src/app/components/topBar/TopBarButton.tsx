import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    <Button
      color="inherit"
      sx={{
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "none",
      }}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};
