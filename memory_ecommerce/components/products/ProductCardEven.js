import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import img01 from "../../public/product01.png";

import styles from "../../styles/Product.module.css";

const ProductCardEven = (props) => {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };
  return (
    <div data-testid="evenCard" className={styles.evenContainer}>
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

export default ProductCardEven;
