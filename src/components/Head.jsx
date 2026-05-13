import * as React from "react";
import { useState, useEffect } from "react"; // Kancaları import ettik
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "styled-components";
import DarkMode from "./DarkMode";

const pages = ["Clothing", "Electronics", "Home Decoration"];

function Head({ isDark, setIsDark }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#121212" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#333";
  }, [isDark]);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: isDark ? "#1e1e1e" : "#fff",
        color: isDark ? "#fff" : "#333",
        boxShadow: isDark
          ? "0px 2px 10px rgba(0,0,0,0.5)"
          : "0px 2px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#ff6000",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            S12-STORE
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              height: "64px",
            }}
          >
            {pages.map((page) => (
              <NavContainer key={page}>
                <NavButton style={{ color: isDark ? "#fff" : "#333" }}>
                  {page}
                </NavButton>

                <MegaMenu
                  className="mega-menu"
                  style={{ backgroundColor: isDark ? "#2d2d2d" : "#fff" }}
                >
                  <Box sx={{ p: 3, display: "flex", gap: 5 }}>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", mb: 1, color: "#ff6000" }}
                      >
                        Popular {page}
                      </Typography>
                      <SubItem isDark={isDark}>Trend Items</SubItem>
                      <SubItem isDark={isDark}>New Arrivals</SubItem>
                      <SubItem isDark={isDark}>Discounts</SubItem>
                    </Box>
                  </Box>
                </MegaMenu>
              </NavContainer>
            ))}
          </Box>

          <DarkMode isDark={isDark} setIsDark={setIsDark} />

          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const NavContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &:hover .mega-menu {
    display: block;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  padding: 0 20px;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #ff6000 !important;
    border-bottom: 3px solid #ff6000;
  }
`;

const MegaMenu = styled.div`
  display: none;
  position: absolute;
  top: 64px;
  left: 0;
  min-width: 250px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;
  z-index: 1300;
`;

const SubItem = styled(Typography)`
  cursor: pointer;
  margin-top: 8px !important;
  font-size: 0.875rem !important;
  color: ${(props) => (props.isDark ? "#ccc" : "#666")};
  &:hover {
    color: #ff6000 !important;
  }
`;

export default Head;
