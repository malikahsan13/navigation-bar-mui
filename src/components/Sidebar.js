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
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{background:"#2596be"}}>
          {menuList.map((menuItem, idx) => (
            <ListItemButton divider onClick={()=>setOpenDrawer(false)}>
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
      <IconButton sx={{color:"white", marginLeft:"auto"}} onClick={() => setOpenDrawer(true)}>
        <MenuRounded textColor="inherit" />
      </IconButton>
    </>
  );
};

export default Sidebar;
