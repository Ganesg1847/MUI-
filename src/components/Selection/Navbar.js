import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import { Avatar, Grid } from "@mui/material";

import logo from "../Selection/logo.png";
import ClearIcon from "@mui/icons-material/Clear";

import Products from "./Products";
import { useState } from "react";
import Productlg from "../Selection/Productlg";
import Docs from "./Docs";
import "../Selection/Navbar.css";

const drawerWidth = 240;
const navItems = [
  {
    title: "Product",
    id: 0,
    listItems: [
      {
        title: <Productlg />,
      },
    ],
  },
  {
    title: "Docs",
    id: 1,
    listItems: [
      {
        title: <Docs />,
      },
    ],
  },
  {
    title: "Pricing",
    id: 2,
    listItems: [],
  },
  {
    title: "About us",
    id: 3,
    listItems: [],
  },
  {
    title: "Blogs",
    id: 4,
    listItems: [],
  },
];
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Grid container item spacing={1}>
        <Grid xs={10} item>
          <Avatar
            src={logo}
            width="40"
            heigth="40"
            variant="square"
            sx={{ m: 2 }}
          />
        </Grid>

        <Grid item xs={2}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <ClearIcon sx={{ color: "black", m: 2 }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid xs={12} item>
        <Products />
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "rgba(255,255,255,0.72)",
          mt: -1,
          boxShadow: " 0px -1px 1px #f5f5f5",
        }}
      >
        <Toolbar>
          <Grid
            container
            item
            spacing={0}
            direction="row"
            sx={{ px: { lg: 9, xs: 1 } }}
          >
            <Grid xs={9} item>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    diplay: "flex",

                    ml: 3,
                  },
                }}
              >
                <List
                  component="nav"
                  sx={{
                    color: "black",
                    backgroundColor: "rgba(255,255,255,0.72)",
                    display: "flex",
                    flexDirection: "row",
                    ml: 1,
                    fontWeight: "600",
                  }}
                  className="abc"
                >
                  <Avatar
                    src={logo}
                    width="40"
                    heigth="40"
                    variant="square"
                    sx={{ mt: 1 }}
                  />
                  {navItems.map((item, id) => (
                    <Grid item key={id}>
                    <ListItem>
                      {item.title}
                      <List>
                        {item.listItems.map((list, id) => (
                          <div key={id}>
                            <ListItem>
                              <ListItemText primary={list.title} />
                            </ListItem>
                          </div>
                        ))}
                      </List>
                    </ListItem>
                    </Grid>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid xs={10} item sx={{ display: { md: "none", lg: "block" } }}>
              <Avatar
                src={logo}
                width="40"
                heigth="40"
                variant="square"
                sx={{ mt: 1, display: { md: "none", lg: "none" } }}
              />
            </Grid>
            <Grid xs={2} item sx={{ zIndex: "20" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, display: { sm: "none" } }}
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
