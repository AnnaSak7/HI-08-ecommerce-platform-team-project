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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const products = ["aba", "aca", "ada", "aga", "ala"];

export default function PrimarySearchAppBar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchBarInput, setSearchBarInput] = React.useState("");
  const isMenuOpen = Boolean(anchorEl);
  const [suggestions, setSuggestions] = React.useState([]);

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
    handleMobileMenuClose();
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
            <Typography textAlign="center" variant="h4" noWrap component="div">
              Memory X
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {/* <Search
              onChange={console.log("in search")}
              sx={{ borderRadius: "20px" }}
            > */}
            <input type="text" onChange={(evt) => inputHandler(evt)} />
            <AutoComplete input={suggestions} />
            {/* <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={console.log("in search2")}
                placeholder="Search for your dream"
                inputProps={{ "aria-label": "search" }}
              />  */}
            {/* </Search> */}

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={openCartHandler}
            >
              <Badge badgeContent={4} color="error">
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
  );
}
