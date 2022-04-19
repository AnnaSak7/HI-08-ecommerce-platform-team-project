import Image from 'next/image'
import React from 'react'
import img01 from '../../public/product01.png'

const ProductCardEven = (props) => {
  console.log('name is ', props.name)
  return (
    <div className='even-container'>
        <div className='image-container'>
        <img className="img-card" src={props.image} alt={props.name} width="500px" height="300px" />
        </div>
        <div className="textBox" style={{backgroundColor: props.color}}>
        <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ProductCardEven
