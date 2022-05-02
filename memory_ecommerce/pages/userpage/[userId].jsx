import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Image from "next/image";
import { MongoClient } from "mongodb";
import { CleaningServicesTwoTone } from "@mui/icons-material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "30px auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="TOP" src="/images/climbing.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                TOP OF THE WORLD
              </Typography>
              <Typography variant="body2" gutterBottom>
                Purchased 2022/04/22
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const orderCollection = db.collection("order");
  const orders = await orderCollection.find({}, { userId: 1 }).toArray();

  client.close();

  const paths = orders.map((order) => ({
    params: {
      userId: order.userId.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const userId = context.params.userId;
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const orderCollection = db.collection("orders");
  const selectedUser = await orderCollection.findOne({ userId: userId });

  client.close();

  return {
    props: {
      orderData: {
        id: selectedUser._id.toString(),
        orderID: selectedUser.OrderID,
        product: selectedUser.product,
        purchasedDate: selectedUser.purchasedDate,
        price: selectedUser.price,
      },
    },
  };
}
