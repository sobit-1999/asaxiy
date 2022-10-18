import { Search } from "@mui/icons-material";
import { AppBar, Card, CardMedia, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../images/logo.svg";
import "./header.css";

export default function Header() {
  return (
    <AppBar
      className="header-container"
      sx={{ background: "#fff" }}
    >
      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image={logo}
        alt="Paella dish"
      />
      <Box className="navbar-input">
        <IconButton>
          <Search />
        </IconButton>
        <input placeholder="Search…" inputProps={{ "aria-label": "search" }} />
      </Box>
      hh
    </AppBar>
  );
}
