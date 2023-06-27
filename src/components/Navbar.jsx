import React from "react";
import "../style/fonts/josefin-sans.css";
import logo from "../resources/images/steampunk-logo.png";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)(() => ({
  borderBottom: "2px solid #E2E2E2",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

// TODO: Fix me!!
// The logo is not centered
const Logo = styled("img")(() => ({
  margin: "auto",
  textAlign: "center",
  width: "25%",
  paddingTop: "15px",
  paddingBottom: "15px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.7em + ${theme.spacing(0.1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const MenuItem = styled(Typography)(() => ({
  paddingRight: "40px",
  fontFamily: "Josefin Sans",
  fontSize: "20px",
  color: "#6D6D6D",
  ":hover": {
    cursor: "pointer",
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const navContact = () => navigate("/contact");
  const navHome = () => navigate("/");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Search>
            <StyledInputBase
              placeholder="Workshops near you..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Logo
            src={logo}
            sx={{ ":hover": { cursor: "pointer" } }}
            onClick={navHome}
          />
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem onClick={navContact}>
            Contact
          </MenuItem>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

export default Navbar;
