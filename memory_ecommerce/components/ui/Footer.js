import * as React from "react";
import { useRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatIcon from "@mui/icons-material/Chat";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#2C3F40",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#B5E0DF",
}));

export default function AutoGrid() {
  const inputClick = useRef();
  const clickHandler = () => {
    //event.preventDefault();
    alert("you pressed button");
    const inputMail = inputClick.current.value;

    const mailData = {
      mail: inputMail,
    };
    console.log(mailData);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "2rem", bgcolor: "#2C3F40" }}>
      <Typography
        style={{
          textAlign: "center",
          padding: "10px",
          color: "#B5E0DF",
          fontSize: "1.5em",
        }}
      >
        CONTACT US
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs>
          <Item elevation={0}>
            FOLLOW US <br />
            <BottomNavigationAction
              sx={{ color: "#B5E0DF" }}
              icon={<FacebookIcon />}
            />
            <BottomNavigationAction
              sx={{ color: "#B5E0DF" }}
              icon={<InstagramIcon />}
            />
            <BottomNavigationAction
              sx={{ color: "#B5E0DF" }}
              icon={<SubscriptionsIcon />}
            />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={0} style={{ justifyItems: "center" }}>
            <Typography>
              NEWSLETTER <br />
              Sign up for our newsletter and get emails you love filled with
              great inspirations and tips of the latest memories releases and
              the most recommended.
            </Typography>
            <Box
              onClick={clickHandler}
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                style={{ backgroundColor: "#fff", borderRadius: "5px" }}
              >
                <input type="text" ref={inputClick} />
              </TextField>
              <br />
              <Button
                variant="outlined"
                style={{ backgroundColor: "#5FA0A4", color: "#fff" }}
              >
                SUBMIT
              </Button>

              <Stack spacing={2} direction="row"></Stack>
            </Box>
          </Item>
          <Typography style={{ textAlign: "center", color: "#B5E0DF" }}>
            2022 ® Memory X <br /> All memories are owned by Memory X
          </Typography>
        </Grid>

        <Grid item xs>
          <Item elevation={0}>
            <Typography>WRITE US</Typography>
            <BottomNavigationAction
              sx={{ color: "#B5E0DF" }}
              icon={<MailOutlineIcon />}
            />
            <BottomNavigationAction
              sx={{ color: "#B5E0DF" }}
              icon={<ChatIcon />}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
