import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { Sidebar } from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Text from "../../Text";
import { setupAxiosInterceptors } from "../../../api/axios";

export default function ManagementLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
const dispatch = useDispatch();

  useEffect(() => {
    // Initialize Axios interceptors with dispatch and navigate
    setupAxiosInterceptors(dispatch, navigate);
  }, [dispatch, navigate]);


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerWidth = 270;

  return (
    <>
      <Box sx={{ bgcolor: "#191919" }}>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            zIndex: (theme) => theme.zIndex.drawer,
            backgroundColor: "#191919",
          }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                maxHeight: "100vh !important",
                backgroundColor: "#191919", // Set drawer background color to black
              },
            }}
          >
            <Sidebar />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#191919", // Set drawer background color to black
              },
            }}
            open
          >
            <Sidebar />
          </Drawer>
        </Box>
        <Box
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              width: { md: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              backgroundColor: "#000",
              boxShadow: "none",
              padding: 2,
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <Menu sx={{ color: "#000" }} />
              </IconButton>
              <Box>
                <Text fs="23px" fw="550" color="#fff">
                  Overview
                </Text>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Nav />
            </Toolbar>
          </AppBar>
          <Box
            bgcolor="#000"
            sx={{
              minHeight: "calc(90vh)", // Adjusted to exclude app bar height
              ml: { md: `${drawerWidth}px` },
              minWidth: "100%",
              marginTop: "80px",
              p: { md: 5, lg: 6, sm: 2, xs: 1 },
              
            }}
          >
            {/* ------------------------------------------- */}
            {/* Page Route */}
            {/* ------------------------------------------- */}

            <Outlet />

            {/* ------------------------------------------- */}
            {/* End Page */}
            {/* ------------------------------------------- */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
