import { MenuRounded } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box
} from "@mui/material";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const Sidebar = ({ menuList }) => {
  const [openDrawer, SetOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => SetOpenDrawer(false)}>
        <List>
          {menuList.map((menuItem, idx) => (
            <ListItemButton divider>
              <ListItemIcon>
                <ListItemText>{menuItem}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <ListItemButton>
            <CustomButton btnText="Sign Up" btnVariant="contained" />
          </ListItemButton>
          <ListItemButton>
            <CustomButton btnText="Login" btnVariant="contained" />
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton sx={{color:"white", marginLeft:"auto"}} onClick={() => SetOpenDrawer(true)}>
        <MenuRounded textColor="inherit" />
      </IconButton>
    </>
  );
};

export default Sidebar;
