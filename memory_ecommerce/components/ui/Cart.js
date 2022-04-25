import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./Cart.module.css";
import Divider from "@mui/material/Divider";

export default function Cart() {
  return (
    <div className={classes.cartWrapper}>
      <Card className={classes.cartContainer} sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            gutterBottom
          >
            CART
          </Typography>
          <Divider />
          <Typography
            sx={{ mt: "5rem", fontSize: "1.2rem" }}
            variant="body1"
            textAlign="center"
            color="text.secondary"
            gutterBottom
          >
            1 x Swimming With Dolphins
          </Typography>
          <Divider />
        </CardContent>

        <Card className={classes.cartDetails} sx={{ mb: "1rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: "1.3rem" }}
              variant="body1"
              color="text.secondary"
              gutterBottom
            >
              Items: 1
            </Typography>
            <Typography
              sx={{ fontSize: "1.3rem" }}
              variant="body1"
              color="text.secondary"
              gutterBottom
            >
              Total: $150
            </Typography>
          </CardContent>
          <CardActions className={classes.cartButtons}>
            <Button className={classes.button} size="small">
              Pay now
            </Button>
          </CardActions>
        </Card>
      </Card>
    </div>
  );
}
