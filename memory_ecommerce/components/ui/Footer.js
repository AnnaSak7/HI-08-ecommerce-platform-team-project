import React from 'react'
import { makeStyles } from "@emotion/styled";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#2C3F40",
    color: "black",
  },
});


const Footer = () => {
    const classes = useStyles();

  return (
    <div>
      <BottomNavigation>
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="YouTube" icon={<YouTubeIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Footer;