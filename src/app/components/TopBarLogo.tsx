import { Box } from "@mui/material";
import React from "react";

import logo from "../../assets/logo_sigma.png";

export const TopBarLogo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <img src={String(logo)} alt="Logo Sigma" style={{ height: "40px" }} />
    </Box>
  );
};
