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
import { ListItemButton, Paper } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  sideBarMenuItemsTheme,
  sideBarTheme,
  sideBarMenuSubItemListTheme,
} from "../../styles/sidebar/SideBarMenuTheme";
import { Link } from "react-router-dom";

interface SubItem {
  label: string;
  location: string;
}

interface ListItemProps {
  subitems: SubItem[];
  open: boolean;
}

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
              className="MuiListItemButton-sideBarMenuSubItemList"
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
}: {
  label: string;
  icon: React.ReactElement<SvgIconProps>;
  subItems: SubItem[];
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const itemProps: ListItemProps = {
    open: open,
    subitems: subItems,
  };

  return (
    <>
      <ListItemButton component={Link} to="/products" onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {subItems ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
      <SubItemsList subitems={itemProps.subitems} open={open} />
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
            subItems={[{ label: "Criar novo", location: "/products/new" }]}
          />
          <Divider />
          <MenuItem
            label="Fluxo de Caixa"
            icon={<PointOfSaleIcon />}
            subItems={[
              { label: "Resumo Financeiro", location: "/cash-flow/overview" },
              { label: "Movimentações", location: "/cash-flow/transactions" },
            ]}
          />
          <Divider />
          <Box className="MuiBox-menuItemsFooter">
            <MenuItem label="Logout" icon={<LogoutIcon />} subItems={[]} />
          </Box>
        </List>
      </Box>
    </ThemeProvider>
  );
};

export const SideBar = () => {
  return (
    <ThemeProvider theme={sideBarTheme}>
      <CssBaseline />

      <Box className="MuiBox-sidebar">
        <SideBarLogo />
        <Divider />
        <MenuItems />
      </Box>
    </ThemeProvider>
  );
};
