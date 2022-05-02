import React from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/IndividualProducts.module.css";

const ProductDetails = (props) => {
  const addToCartHandler = () => {
    if (!localStorage.products) {
      localStorage.setItem("products", JSON.stringify([props.name]));
    } else {
      let oldData = JSON.parse(localStorage.getItem("products"));
      oldData.push(props.name);

      localStorage.setItem("products", JSON.stringify(oldData));
    }
  };

  return (
    <section>
      <div className={styles.divContainer}>
        <div className={styles.divItem}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={styles.divText}>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <Button
            variant="contained"
            style={{ backgroundColor: " #5fa0a4" }}
            onClick={addToCartHandler}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
