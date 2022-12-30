import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";

const Navbar = ({ menuList }) => {
  const [menuSel, setMenuSel] = useState(0);
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              <Typography>
                <ApiIcon />
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Tabs
                value={menuSel}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={(e, val) => setMenuSel(val)}
              >
                {menuList.map((menuItem) => (
                  <Tab key={menuItem.index} label={menuItem} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={2}>
              <Box>
                <Button variant="contained">
                  Sign Up
                </Button>
                <Button variant="contained">
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
