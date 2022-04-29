import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import styles from "../../styles/Product.module.css";

const ProductCardOdd = (props) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <div className={styles.oddContainer}>
      <div className={styles.imageContainer} onClick={showDetailsHandler}>
        <img src={props.image} alt={props.name} width="500px" height="300px" />
      </div>
      <div
        className={styles.textBox}
        style={{ backgroundColor: props.color, color: props.fontColor }}
      >
        <h2 className={styles.productName}>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProductCardOdd;
