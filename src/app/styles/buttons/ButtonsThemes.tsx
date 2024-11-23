import { createTheme } from "@mui/material/styles";

export const filterButtonTheme = createTheme({
  palette: {
    primary: {
      main: "#36486b",
    },
    secondary: {
      main: "#82b74b",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-logOutButton": {
          backgroundColor: "#fefbd8",
          marginLeft: "auto",
          marginRight: "5%",
        },
        ".MuiButton-logOutButton": {
          textTransform: "none",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },
  },
});
