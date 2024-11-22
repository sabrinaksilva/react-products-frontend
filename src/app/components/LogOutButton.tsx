import { Box, Button } from "@mui/material";
import React from "react";

export const LogOutButton = () => {
  return (
    <Box
      sx={{
        marginLeft: "auto",
      }}
    >
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          textTransform: "none",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Log out
      </Button>
    </Box>
  );
};
