import Image from "next/image";
import Link from "next/link";
import React from "react";
import img01 from "../../public/product01.png";

import styles from "../../styles/Product.module.css";

const ProductCardEven = (props) => {
  console.log("name is ", props.name);
  return (
    <div className={styles.evenContainer}>
      <div className={styles.imageContainer}>
        <Link href={`/${props.id}`}>
          <a>
            <img
              src={props.image}
              alt={props.name}
              width="500px"
              height="300px"
            />
          </a>
        </Link>
      </div>
      <div className={styles.textBox} style={{ backgroundColor: props.color }}>
        <h2 className={styles.productName}>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProductCardEven;
