import * as React from "react";
import Image from "next/image";
import { ReactComponent as Logo } from "../../public/logo.svg";
import { useRouter } from "next/router";
import AutoComplete from "./AutoComplete";
//MUI
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//STYLING
import classes from "./Navbar.module.css";

const products = [
  //TODO fetch this data from Mongo instead
  "Lavish Trip",
  "Long Night Out",
  "Top Of The World",
  "Butterflies In The Stomach",
  "Pearl White Beaches",
];

export default function PrimarySearchAppBar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchBarInput, setSearchBarInput] = React.useState("");
  const isMenuOpen = Boolean(anchorEl);
  const [suggestions, setSuggestions] = React.useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = React.useState("");

  const openProfileHandler = (event) => {
    console.log("opening user section");
    setAnchorEl(event.currentTarget);
  };

  const openCartHandler = (event) => {
    console.log("opening cart");
    router.push("/cart");
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    //handleMobileMenuClose();
    router.push("/signin");
  };

  const logoHandler = () => {
    router.push("/");
  };

  const inputHandler = (event) => {
    setSearchBarInput(event.target.value);
    onInputChange(event.target.value);
  };

  const onInputChange = (val) => {
    if (val.length === 0) {
      setSuggestions([]);
    } else {
      const inputRegexp = new RegExp(val, "i");
      console.log(inputRegexp);
      const filteredSuggestions = products.filter((prod) =>
        inputRegexp.test(prod)
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: "30%" }}
              onClick={logoHandler}
            >
              <Image src="/logo.svg" height={40} width={60} alt="xxx" />
            </IconButton>
            <div className={classes.wrapper}>
              <Typography
                textAlign="center"
                variant="h4"
                noWrap
                component="div"
              >
                Memory X
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <input
                //value={selectedSuggestion}
                type="text"
                onChange={(evt) => inputHandler(evt)}
              />

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={openCartHandler}
              >
                <Badge badgeContent={4} color="info">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={openProfileHandler}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
      {suggestions.length > 0 && (
        <AutoComplete
          setSelectedSuggestion={setSelectedSuggestion}
          input={suggestions}
        />
      )}
    </>
  );
}
