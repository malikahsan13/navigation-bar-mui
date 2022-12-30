import React, {useState} from 'react'
import {AppBar, Grid, Toolbar, Typography, Box,Tabs, Tab} from "@mui/material"
import ApiIcon from '@mui/icons-material/Api';

const Navbar = () => {
  const [menuSel, setMenuSel] = useState(0)
  return (
    <>
     <AppBar>
        <Toolbar>
            <Grid container>
                <Grid item xs={2}>
                    <Typography>
                        <ApiIcon />
                    </Typography>
                </Grid>    
                <Grid item xs={4}>
                    <Tabs value={menuSel} textColor="inherit" indicatorColor='secondary' onChange={(e, val)=>setMenuSel(val)}>
                        <Tab label="Home" />
                        <Tab label="About" />
                        <Tab label="Contact Us" />
                    </Tabs>
                </Grid>
            </Grid>
        </Toolbar>
     </AppBar>
    </>
  )
}

export default Navbar
