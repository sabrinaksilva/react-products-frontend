import { createTheme } from "@mui/material/styles";

export const sideBarTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-sidebar": {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#EAEFF5",
          borderRight: "1px solid #ccc",
        },
      },
    },
  },
});

export const sideBarMenuItemsTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-menuItems": {
          display: "flex",
          flexDirection: "column",
        },
        ".MuiList-menuItems": {
          width: "100%",
          backgroundColor: "background.paper",
        },
        ".MuiBox-menuItemsFooter": {
          marginTop: "auto",
        },
      },
    },
  },
});

export const sideBarMenuSubItemListTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiListItemButton-sideBarMenuSubItemList": {
          paddingLeft: "32px",
        },
      },
    },
  },
});
