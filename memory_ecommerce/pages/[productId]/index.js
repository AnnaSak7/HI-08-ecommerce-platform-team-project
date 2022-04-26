import React from "react";
import { MongoClient } from "mongodb";

import { DUMMY_LIST } from "../../components/products/DummyData.js";
import styles from "../../styles/IndividualProducts.module.css";
import Button from "@mui/material/Button";

export default function ProductPage(props) {
  console.log(DUMMY_LIST.image);
  return (
    <div className={styles.divContainer}>
      <div className={styles.divItem}>
        <img src={props.productData.image} alt={props.productData.name} />
      </div>
      <div className={styles.divText}>
        <h1>{props.productData}</h1>
        <p>{props.productData.description}</p>
        <Button variant="contained" style={{ backgroundColor: " #5fa0a4" }}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI);

  const db = client.db();
  const productCollection = db.collection("products");
  const products = await productCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: products.map((product) => {
      params: {
        productId: product._id.toString();
      }
    }),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single product

  const productId = context.params.productId;

  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const productCollection = db.collection("products");
  const selectedProduct = await productCollection.findOne({
    _id: ObjectId(productId),
  });
  client.close();

  return {
    props: {
      productData: {
        id: selectedProduct._id.toString(),
        name: selectedProduct.name,
        image: selectedProduct.image,
        description: selectedProduct.description,
      },
    },
  };
}
