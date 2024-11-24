import Button from "@mui/material/Button";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/foo");
  };

  return (
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
      onClick={handleLogoutClick}
    >
      SAIR
    </Button>
  );
};
