import { Box } from "@mui/material";
import React from "react";

import logo from "../../../assets/logo_sigma.png";

export const SideBarLogo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <img src={String(logo)} alt="Logo Sigma" />
    </Box>
  );
};
