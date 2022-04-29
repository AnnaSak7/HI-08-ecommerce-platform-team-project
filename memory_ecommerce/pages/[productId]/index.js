import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import { Head } from "next/head";
import ProductDetails from "../../components/products/ProductDetails";

const ProductDetail = (props) => {
  return (
    <>
      <Head>
        <title>{props.productData.title}</title>
        <meta name="description" content={props.productData.description} />
      </Head>
      <ProductDetails
        image={props.productData.image}
        name={props.productData.name}
        description={props.productData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const productCollection = db.collection("products");
  const products = await productCollection.find({}, { _id: 1 }).toArray();
  console.log("products is ", products);
  client.close();

  return {
    fallback: false,
    paths: products.map((product) => {
      params: {
        productId: product._id.toString();
      }
    }),
  };
}

export async function getStaticProps(context) {
  //fetch data for a single product
  const productId = context.params.id;
  console.log("productId is ", productId);
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const productCollection = db.collection("products");
  const selectedProduct = await productCollection.findOne({
    _id: ObjectId(productId),
  });
  console.log("selectedProduct : ", selectedProduct);
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

export default ProductDetail;
