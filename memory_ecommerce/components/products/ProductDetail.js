
import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ProductDetail = (props) => {
    
  return (
    <section>
        <div>
            <img src={props.image} alt={props.name} width="500px" height="300px" />
            <div>
                <h1>{props.name}</h1>
                <p>{props.genre}</p>
            </div>
            <Button variant="contained" color="secondary">
        Add to Cart
      </Button>
            
        </div>
    </section>
  )
}

export default ProductDetail