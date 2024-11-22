import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { SvgIconProps } from "@mui/material/SvgIcon";
import Divider from "@mui/material/Divider";
import { SideBarLogo } from "../topBar/SideBarLogo";

const MenuItem = ({
  label,
  icon,
  subLabel,
}: {
  label: string;
  icon: React.ReactElement<SvgIconProps>;
  subLabel: string | undefined;
}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={label} secondary={subLabel} />
    </ListItem>
  );
};

const MenuItems = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuItem
          label="Produtos"
          icon={<InventoryIcon />}
          subLabel="Gestão de Produtos"
        />
        <Divider />
        <MenuItem
          label="Estoque"
          subLabel="PointOfSaleIcon"
          icon={<PointOfSaleIcon />}
        />
        <Divider />
        <Box
          sx={{
            marginTop: "auto",
          }}
        >
          <MenuItem label="Logout" icon={<LogoutIcon />} subLabel="" />
        </Box>
      </List>
    </Box>
  );
};

export const SideBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "background.paper",
        borderRight: "1px solid #ccc",
      }}
    >
      <SideBarLogo />
      <Divider />

      <MenuItems />
    </Box>
  );
};
