import { createTheme } from "@mui/material/styles";

export const mainAppBarTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiAppBar-main": {
          width: "100%",
          left: 0,
        },
      },
    },
  },
});

export const mainToolBarTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiToolBar-main": {
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      },
    },
  },
});

export const mainTopBarToolBarTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-main": {
          display: "flex",
          alignItems: "center",
          gap: "32px",
        },
        ".MuiBox-buttons": {
          display: "flex",
          gap: "16px",
          marginLeft: "32px !important",
        },
      },
    },
  },
});

export const mainTopBarButtonTheme = createTheme({
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
