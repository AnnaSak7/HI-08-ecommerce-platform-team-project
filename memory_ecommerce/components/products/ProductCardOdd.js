import Image from 'next/image'
import React from 'react'
import img01 from '../../public/product01.png'

import styles from '../../styles/Product.module.css'

const ProductCardOdd = (props) => {
  
  return (
    <div className={styles.oddContainer}>
        <div className={styles.imageContainer}>
        <img src={props.image} alt={props.name} width="500px" height="300px" />
        </div>
        <div className={styles.textBox} style={{backgroundColor: props.color}}>
          <h2 className={styles.productName}>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ProductCardOdd