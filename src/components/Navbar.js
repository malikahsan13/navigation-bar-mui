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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import Sidebar from "./Sidebar";
import CustomButton from "./CustomButton";

const Navbar = ({ menuList }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuSel, setMenuSel] = useState(0);
  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)",
        }}
      >
        <Toolbar>
          <Grid item xs={1}>
            <Typography>
              <ApiIcon />
            </Typography>
          </Grid>
          {!isMatch ? (
            <Grid container sx={{ placeItems: "center" }}>
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
                  <CustomButton btnText="Sign Up" btnVariant="contained" btnStyle={{marginLeft: "auto"}} />
                  <CustomButton btnText="Login" btnVariant="contained" btnStyle={{marginLeft: "3px"}} />
                </Box>
              </Grid>
            </Grid>
          ) : (
            <Sidebar menuList={menuList} />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
