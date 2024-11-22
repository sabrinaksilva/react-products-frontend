import { createTheme } from "@mui/material/styles";

export const logoTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-sidebarLogo": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "16px",
          marginBottom: "16px",
        },
      },
    },
  },
});
