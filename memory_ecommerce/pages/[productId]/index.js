import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import ProductDetails from "../../components/products/ProductDetails";

export default function ProductDetail(props) {
  console.log(props.todo);

  return (
    <>
      <ProductDetails
        image={props.productData.image}
        name={props.productData.name}
        description={props.productData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const productCollection = db.collection("products");
  const products = await productCollection.find({}, { _id: 1 }).toArray();
  // console.log("products is ", products);
  client.close();
  const paths = products.map((product) => ({
    params: {
      productId: product._id.toString(),
    },
  }));
  // console.log("paths : ", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //fetch data for a single product
  const productId = context.params.productId;
  console.log("productId is ", productId);
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const productCollection = db.collection("products");
  const selectedProduct = await productCollection.findOne({
    _id: ObjectId(productId),
  });
  // console.log("selectedProduct : ", selectedProduct);
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
