import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setupAxiosInterceptors } from "../../../api/axios";
import SearchInput from "../../Search";
import Settings from "../../../../public/svgs/Settings";

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
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

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (link) => {
    setAnchorEl(null);
    navigate(link);
  };

  const drawerWidth = 200;

  const navItems = [
    { label: "Dashboard", path: "/dashboard/app" },
    { label: "AI Questionnaire", path: "/dashboard/questionnaire" },
    { label: "Certification Roadmaps", path: "/dashboard/roadmaps" },
    { label: "Internal Audits", path: "/dashboard/audits" },
    { label: "Resources", path: "/dashboard/resources" },
    { label: "Reports", path: "/dashboard/reports" },
  ];

  const renderNavList = () => (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton onClick={() => navigate(item.path)}>
            <ListItemText primary={item.label} sx={{ color: "#fff" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Box>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "100px",
              maxHeight: "100% !important",
              backgroundColor: "#191919",
            },
          }}
        >
          {renderNavList()}
        </Drawer>
        <Box>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "#000",
              boxShadow: "none",
              padding: 2,
              height: "100px",
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src="/logo/Logo.svg"
                  sx={{ height: "72px", cursor: "pointer" }}
                />
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon sx={{ color: "#2DDB81" }} />
              </IconButton>

              <Box
                sx={{
                  justifyContent: "space-between",
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  border: "1px solid #10281B",
                  width: "100%",
                  borderRadius: "12px",
                  height: "75px",
                  bgcolor: "#0C0E0D",
                  mt: 5,
                  px: 3,
                  py: 2,
                }}
              >
                <Box sx={{ gap: 2 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      sx={{
                        bgcolor:
                          location.pathname === item.path
                            ? "#2DDB81"
                            : "transparent",
                        color:
                          location.pathname === item.path ? "#333333" : "#fff",
                        fontWeight: location.pathname === item.path ? 700 : 500,
                        fontSize: "15px",
                        height: "52px",
                        borderRadius: "9px",
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>

                <Box display="flex" alignItems="center" gap="12px">
                  <SearchInput width="242px" placeholder="Search" />
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/dashboard/settings")}
                  >
                    <Settings />
                  </Box>
                  <IconButton onClick={handleProfileMenuOpen}>
                    <Box
                      component="img"
                      src="/svgs/default-img.svg"
                      width="49px"
                      height="49px"
                      borderRadius="8px"
                      sx={{ cursor: "pointer" }}
                    />
                  </IconButton>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{
                      "& .MuiPaper-root": {
                        backgroundColor: "#0C0E0D",
                        border: "1px solid #2DDB81",
                        width: "218px",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    <MenuItem
                      sx={{ color: "#fff" }}
                      onClick={() => handleNavigate("/dashboard/settings")}
                    >
                      Profile Settings
                    </MenuItem>
                    <Divider sx={{ bgcolor: "#FFFFFF1A" }} />
                    <MenuItem
                      sx={{ color: "#fff" }}
                      onClick={() => handleNavigate("/dashboard/support")}
                    >
                      Support
                    </MenuItem>
                    <Divider sx={{ bgcolor: "#FFFFFF1A" }} />
                    <MenuItem
                      sx={{ color: "#fff" }}
                      onClick={() => handleNavigate("/dashboard/forum")}
                    >
                      Community Forum
                    </MenuItem>
                    <Divider sx={{ bgcolor: "#FFFFFF1A" }} />
                    <MenuItem
                      sx={{ color: "#fff" }}
                      onClick={() =>
                        handleNavigate("/dashboard/knowledge-base")
                      }
                    >
                      Knowlegde Base
                    </MenuItem>
                    <Divider sx={{ bgcolor: "#FFFFFF1A" }} />
                    <MenuItem
                      sx={{ color: "#fff" }}
                      onClick={() => handleNavigate("/dashboard/help-center")}
                    >
                      Help Center
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            bgcolor="#000"
            sx={{
              minHeight: "calc(90vh)",
              minWidth: "100%",
              marginTop: "80px",
              p: { md: 5, lg: 6, sm: 2, xs: 2 },
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
