import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { SvgIconProps } from "@mui/material/SvgIcon";
import Divider from "@mui/material/Divider";
import { SideBarLogo } from "./SideBarLogo";
import { ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

interface SubItem {
  label: string;
  location: string;
}

interface ListItemProps {
  subitems: SubItem[];
  open: boolean;
}

const sideBarTheme = createTheme({
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

const sideBarMenuItemsTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiBox-menuItems": {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
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

const sideBarMenuSubItemListTheme = createTheme({
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

export const SubItemsList = (props: ListItemProps) => {
  return !props.open || props.subitems.length === 0 ? (
    <></>
  ) : (
    <ThemeProvider theme={sideBarMenuSubItemListTheme}>
      <CssBaseline />
      <Collapse in={props.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.subitems.map((subItem, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={subItem.location}
              sx={{
                paddingLeft: "32px",
                backgroundColor: "#E0E0E0",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              <ListItemText primary={subItem.label} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </ThemeProvider>
  );
};

const MenuItem = ({
  label,
  icon,
  subItems,
  to,
}: {
  label: string;
  icon: React.ReactElement<SvgIconProps>;
  subItems?: SubItem[];
  to: string;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (subItems && subItems.length > 0) {
      setOpen(!open);
    }
  };

  return (
    <>
      <ListItemButton component={Link} to={to} onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {subItems && subItems.length > 0 ? (
          open ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : null}
      </ListItemButton>
      {subItems && subItems.length > 0 && (
        <SubItemsList subitems={subItems} open={open} />
      )}
    </>
  );
};

export const MenuItems = () => {
  return (
    <ThemeProvider theme={sideBarMenuItemsTheme}>
      <CssBaseline />
      <Box className="MuiBox-menuItems">
        <List className="MuiList-menuItems">
          <MenuItem
            label="Produtos"
            icon={<InventoryIcon />}
            subItems={[
              { label: "Novo", location: "/products/new" },
              { label: "Listagem", location: "/products" },
            ]}
            to="/products"
          />
          <Divider />
          <MenuItem
            label="Fluxo de Caixa"
            icon={<PointOfSaleIcon />}
            subItems={[
              { label: "Estoque", location: "/cash-flow/overview" },
              { label: "Movimentações", location: "/cash-flow/inventory" },
            ]}
            to="/cash-flow/overview"
          />
          <Divider />
        </List>
        <Box className="MuiBox-menuItemsFooter" sx={{ marginTop: "auto" }}>
          <ListItemButton
            component={Link}
            to="/logout"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 2,
              backgroundColor: "#EAEFF5",
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export const SideBar = () => {
  const location = useLocation();
  const hideSideBarMenu = location.pathname === "/login";

  return (
    <ThemeProvider theme={sideBarTheme}>
      <CssBaseline />
      <Box className="MuiBox-sidebar">
        <SideBarLogo />
        <Divider />
        {hideSideBarMenu ? <></> : <MenuItems />}
      </Box>
    </ThemeProvider>
  );
};
