import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      white: string;
      primaryBackground: string;
      secondaryBackground: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      white: string;
      primaryBackground: string;
      secondaryBackground: string;
    };
  }
}

export const mainTheme = createTheme({
  palette: {
    primary: { main: "#0D1928" },
    secondary: { main: "#F28E35" },
    custom: {
      white: "#a19b92",
      primaryBackground: "#ffd580",
      secondaryBackground: "#f0f0f0",
    },
  },
  typography: { fontFamily: "Arial, sans-serif" },
});

export const mainGridContainerTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-mainGridContainer": {
          flexGrow: 1,
          minHeight: "100vh",
          height: "auto",
        },
        ".MuiGrid-container-mainGridContainer": {
          minHeight: "100vh",
          height: "auto",
        },
        ".MuiGrid-sidebar-mainGridContainer": {
          minHeight: "100vh",
          height: "auto",
          backgroundColor: "blue",
        },
        ".MuiGrid-mainContent-mainGridContainer": {
          minHeight: "100vh",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  },
});

export const mainPageWithRoutesTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-mainPageWithRoutes": {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#dde5ee",
        },
        ".MuiBox-contentMainPageWithRoutes": {
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "16px",
        },
      },
    },
  },
});
