import {
  CreditCard,
  CreditCardOffOutlined,
  LanguageOutlined,
  Search,
  Shop2Outlined,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../images/logo.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import "./header.css";

export default function Header() {
  return (
    <AppBar
      sx={{
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "10% 44% auto",
        alignItems: "center",
      }}
      className="header-container"
    >
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image={logo}
        alt="Paella dish"
      />
      <Box className="navbar-input">
        <input placeholder="Search…" />
        <Button sx={{ right: "0", position: "absolute", mx: 2, color: "#fff" }}>
          <Search />
          <Typography variant="p">Qidiruv</Typography>
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between",
    alignItems: "center",
    }}>
        {category.map((item, i) => {
          return (
            <Card
              key={i}
              align="center"
              sx={{
                boxShadow: "none",
                cursor: "pointer",

                ":hover": {
                  color: "blue",
                },
              }}
            >
              {i === 3 ? (
                <Badge badgeContent={6} color="primary" 
                sx={{mt:"5px",
                  '& .MuiBadge-badge': {
                    right: -4,
                    top: 8,
                    border: `2px solid`,
                    padding: '0 4px',
                  }}}
                >
                  <item.icon
                    sx={{
                      fontSize: 30,
                      mb: "-5px",
                      
                    }}
                    />
                    </Badge>
              ) : i === 4 ? (
                <Badge badgeContent={4} color="primary" 
                sx={{mt:"5px",
                  '& .MuiBadge-badge': {
                    right: -4,
                    top: 8,
                    border: `2px solid`,
                    padding: '0 4px',
                  }}}>
                  <item.icon
                    sx={{
                      fontSize: 30,
                      mb: "-5px",
                    }}
                  />
                </Badge>
              ) : (
                <>
                  <item.icon
                    sx={{
                      fontSize: 30,
                      mb: "-5px",
                    }}
                  />
                </>
              )}
              <Typography>{item.name}</Typography>
            </Card>
          );
        })}
      </Box>
    </AppBar>
  );
}

const category = [
  { icon: CreditCardOutlinedIcon, name: "To'lov" },
  { icon: LocalShippingOutlinedIcon, name: "Trek" },
  { icon: LanguageOutlined, name: "O'zbekcha" },
  { icon: LocalGroceryStoreOutlinedIcon, name: "Savatcha" },
  { icon: FavoriteBorderOutlinedIcon, name: "Sevimli..." },
  { icon: AccountCircleOutlinedIcon, name: "Kobinet" },
];
