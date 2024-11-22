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
import { useLocation, useNavigate } from "react-router-dom";

interface SubItem {
  label: string;
  location: string;
}

interface ListItemProps {
  subitems: SubItem[];
  open: boolean;
}

const SubItemsList = (props: ListItemProps) => {
  const navigate = useNavigate();

  // const handleSubItemClick = ({
  //   subItemLabel,
  //   subItemLocation,
  // }: {
  //   subItemLabel: string;
  //   subItemLocation: string;
  // }) => {
  //   if (location.pathname === "/foo") {
  //     navigate(subItemLocation, {
  //       state: {
  //         subItemLabel: subItemLabel,
  //         subItemLocation: subItemLocation,
  //       },
  //     });
  //   }
  // };

  return !props.open || props.subitems.length === 0 ? (
    <></>
  ) : (
    <Collapse in={props.open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {props.subitems.map((subItem, index) => (
          <ListItemButton key={index} sx={{ pl: 4 }}>
            <ListItemText primary={subItem.label} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {subItems ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
      <SubItemsList subitems={itemProps.subitems} open={open} />
    </>
  );
};

const MenuItems = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <MenuItem
          label="Produtos"
          icon={<InventoryIcon />}
          subItems={[{ label: "Criar novo", location: "foo" }]}
        />
        <Divider />
        <MenuItem
          label="Fluxo de Caixa"
          icon={<PointOfSaleIcon />}
          subItems={[
            { label: "Detalhamento", location: "foo" },
            { label: "Estoque", location: "foo" },
          ]}
        />
        <Divider />
        <Box
          sx={{
            marginTop: "auto",
          }}
        >
          <MenuItem label="Logout" icon={<LogoutIcon />} subItems={[]} />
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
