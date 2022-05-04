import * as React from "react";
import { styled } from "@mui/material/styles";
import { MongoClient } from 'mongodb';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Image from "next/image";
import Box from "@mui/material/Box";

export const getStaticProps = async () => {
  console.log('function');
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const ordersCollection = db.collection("orders");
  const orders = await ordersCollection.find().toArray();

  client.close();

  return {
    props: {
      orders: orders.map((order) => ({
        id: order.orderID.toString(),
        name: order.product,
        date: order.purchaseDate,
        price: order.price,
        image:order.image,
      })),
    },
  };
};

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid(props) {
  {props.orders.map((order) => (
    console.log(order)
  ))}

  return (
    
   <Box>
     
     {props.orders.map((order) => (
     
    <Paper
      sx={{
        p: 2,
        margin: "30px auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) => theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
 
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="TOP" src={order.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {order.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                 {order.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {order.id}
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
                {order.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      ))}
      </Box>  
  );
}
